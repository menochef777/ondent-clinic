#!/usr/bin/env python3
import os, re, json, socket
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
from html import unescape
from html.parser import HTMLParser

ROOT='https://www.ondentclinic.com/'
BASE='/home/ubuntu/ondent-archive'; RAW=os.path.join(BASE,'raw'); IMG=os.path.join(BASE,'images'); VID=os.path.join(BASE,'videos')
for d in (RAW,IMG,VID): os.makedirs(d, exist_ok=True)
socket.setdefaulttimeout(20)

def fetch_bytes(url):
    req=Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; site-archive/1.0)'})
    with urlopen(req, timeout=20) as r:
        ct=r.headers.get_content_type(); total=0; chunks=[]
        while True:
            chunk=r.read(1024*1024)
            if not chunk: break
            total += len(chunk)
            if total > 500*1024*1024: raise RuntimeError('arquivo excede limite de 500 MB')
            chunks.append(chunk)
        return b''.join(chunks), ct

html,_=fetch_bytes(ROOT); open(os.path.join(RAW,'index.html'),'wb').write(html); text=html.decode('utf-8','replace')
class Parser(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]; self.links=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        for k in ('href','src','poster'):
            if a.get(k): self.links.append((tag,k,urljoin(ROOT,unescape(a[k]))))
    def handle_data(self,data):
        if data.strip(): self.parts.append(data.strip())
p=Parser(); p.feed(text); urls=set(u for _,_,u in p.links)
for raw in re.findall(r'https?://[^\\"\'<> ]+',text): urls.add(raw.replace('\\u0026','&').replace('\\/','/'))
def original(u):
    u=unescape(u).replace('\\/','/')
    if 'static.wixstatic.com/media/' in u:
        path=urlparse(u).path
        if '/v1/' in path: path=path.split('/v1/',1)[0]
        return 'https://static.wixstatic.com'+path
    return u
media=[]
for u in sorted({original(x) for x in urls}):
    low=u.lower().split('?',1)[0]
    if any(x in low for x in ('.jpg','.jpeg','.png','.webp','.gif','.svg','.avif','.mp4','.webm','.mov','.m4v')): media.append(u)
def safe(u): return re.sub(r'[^A-Za-z0-9._-]+','_',urlparse(u).path.rsplit('/',1)[-1] or 'asset')[:180]
records=[]
for i,u in enumerate(media,1):
    ext=os.path.splitext(urlparse(u).path)[1].lower() or '.bin'; typ='video' if ext in ('.mp4','.webm','.mov','.m4v') else 'image'; d=VID if typ=='video' else IMG
    name=safe(u); out=os.path.join(d,name)
    if os.path.exists(out) and os.path.getsize(out)>0: rec={'url':u,'type':typ,'file':os.path.relpath(out,BASE),'status':'downloaded','bytes':os.path.getsize(out),'existing':True}; records.append(rec); continue
    rec={'url':u,'type':typ,'file':os.path.relpath(out,BASE),'status':'pending'}
    try:
        data,ct=fetch_bytes(u); open(out,'wb').write(data); rec.update(status='downloaded',bytes=len(data),content_type=ct)
    except Exception as e:
        if os.path.exists(out): os.remove(out)
        rec.update(status='error',error=str(e))
    records.append(rec)
open(os.path.join(RAW,'content.txt'),'w',encoding='utf-8').write('\n\n'.join(p.parts)+'\n')
json.dump({'source':ROOT,'collected_at':'2026-09-18T16:44:23-03:00','links':sorted(set(u for _,_,u in p.links)),'media':records},open(os.path.join(RAW,'manifest.json'),'w',encoding='utf-8'),indent=2,ensure_ascii=False)
print(json.dumps({'links':len(p.links),'media_found':len(media),'downloaded':sum(r['status']=='downloaded' for r in records),'errors':sum(r['status']=='error' for r in records),'images':sum(r['type']=='image' and r['status']=='downloaded' for r in records),'videos':sum(r['type']=='video' and r['status']=='downloaded' for r in records)},ensure_ascii=False))
for r in records:
    if r['status']=='error': print('ERROR',r['type'],r['url'],r['error'])
