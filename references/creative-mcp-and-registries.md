# ⚡ Fontes Primárias de Referências & Componentes: MotionSites, ReactBits & shadcn

Este guia estabelece os repositórios e servidores MCP primários para busca de templates, animações prontas e componentes quando for solicitado criar ou buscar referências de design.

---

## 1. 🎬 MotionSites.ai (Servidor MCP Integrado)
O servidor MCP `motionsites` está integrado e disponível diretamente para busca de prompts e templates de alta fidelidade:
- **`mcp_motionsites_search_prompts`**: Busca prompts e animações por palavras-chave (ex: "hero parallax", "magnetic cursor", "luxury bento grid").
- **`mcp_motionsites_list_prompts`**: Lista os prompts de motion e design mais recentes.
- **`mcp_motionsites_get_prompt`**: Recupera o prompt de motion completo com código e parâmetros.
- **`mcp_motionsites_get_related_prompts`**: Encontra variações e animações relacionadas.

---

## 2. ⚛️ ReactBits Registry (Componentes Animados Prontos)
O repositório **ReactBits** fornece componentes animados com Framer Motion, WebGL e CSS puro prontos para consumo:

### Registro no `components.json` (shadcn):
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

### Categorias de Componentes ReactBits para Usar:
- **Text Animations**: SplitText, DecryptedText, ShinyText, BlurText, TrueFocus, VariableProximity.
- **Backgrounds**: Hyperspeed, StarBorder, Iridescence, Waves, Squares, Particles, Aurora.
- **Components**: SpotlightCard, CircularGallery, TiltedCard, MagnetLines, ElasticSlider.
- **Animations**: SplashCursor, NoiseOverlay, PixelTrail, GlitchEffect.

---

## 3. 🧩 shadcn/ui MCP & CLI
- **Inicialização do cliente MCP**: `npx shadcn@latest mcp init --client`
- **Instalação direta de blocos**: Permite instalar blocos complexos de UI (dashboards, autenticação, pricing tables, hero sections) de forma limpa e modular.
