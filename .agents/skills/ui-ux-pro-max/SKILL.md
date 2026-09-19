---
name: ui-ux-pro-max
description: >
  UI/UX Pro Max design intelligence engine. Provides 67+ modern UI styles (Bento Grid, Glassmorphism,
  Neomorphism, Neo-Brutalism, Swiss Minimalist, Dark Luxury, Cyberpunk, Claymorphism), 96+ color palettes,
  UX ergonomics, stack-aware design guidelines, and UI anti-pattern prevention.
  Do NOT use for backend SQL or server administration.
triggers:
  - ui style
  - ux design
  - bento grid
  - neo brutalism
  - glassmorphism
  - color harmony
  - uipro
  - design system
  - component aesthetics
---

# UI/UX Pro Max & Multi-Style Design Intelligence

Esta skill incorpora a inteligência visual do **UI/UX Pro Max**, contendo mais de 67 estilos visuais modernos, diretrizes de ergonomia de UX e regras estritas para eliminar vícios visuais de programador ("programmer-vibe UI").

---

## 1. Top 8 Estilos Modernos & Suas Assinaturas Visuais

| Estilo UI | Assinatura Visual | Quando Usar |
| :--- | :--- | :--- |
| **Bento Grid** | Grids modulares com cantos arredondados (`rounded-2xl` a `3xl`), proporções assimétricas, micro-badges e cards multifuncionais. | SaaS, dashboards modernos, landing pages de produto (Apple/Linear style). |
| **Dark Luxury Tech** | Preto profundo com tom grafite/índigo (`#0B0B0F`), bordas peroladas de 1px com reflexo, iluminação caústica difusa e fontes elegantes. | FinTechs premium, joalherias, marcas de luxo, consultorias de alto nível. |
| **Swiss Editorial Minimal** | Tipografia bold dominante, espaçamento arquitetônico generoso, grid rígido, preto e branco com um único acento cromático forte. | Arquitetura, estúdios de design, publicações, portfólios autorais. |
| **Glassmorphism 2.0** | `backdrop-filter: blur(24px) saturate(180%)`, bordas com gradiente translúcido, sombras multicamadas e profundidade Z-index. | Interfaces futuristas, Web3, players de mídia, sistemas operacionais web. |
| **Neo-Brutalism** | Bordas pretas sólidas (`2px - 3px`), sombras duras sem blur (`box-shadow: 4px 4px 0 #000`), cores de alto contraste e fontes condensadas. | Ferramentas para desenvolvedores, startups jovens, produtos criativos e casuais. |
| **Soft Claymorphism** | Formas orgânicas 3D, sombras internas duplas (*inset light* e *inset dark*), paletas pastéis e sensação de toque macio. | Educação infantil, aplicativos de bem-estar, games casuais. |
| **Cyberpunk / Luminescent** | Contrastes extremos escuros, linhas de neon ciano/magenta, ruído sutil de fundo (scanlines/noise) e brilho perolado. | Games, Web3 descentralizado, IA/Compute hardware. |
| **Warm Organic / Scandinavian** | Tons terrosos quentes (bege, linho, verde sábia), texturas de papel/madeira, tipografia serifada contemporânea. | Spas, bem-estar, terapias corporais, cafés artesanais, hotelaria. |

---

## 2. Eliminação de Anti-Patterns ("Anti-Programmer Vibe")

- 🚫 **Nunca use cinza puro em superfícies escuras**: Use tons matizados com azul/roxo (`hsl(240, 8%, 8%)`).
- 🚫 **Nunca use fontes genéricas padrão do navegador**: Sempre utilize famílias de fontes selecionadas (*Plus Jakarta Sans*, *Syne*, *Satoshi*, *Inter*, *Cabinet Grotesk*).
- 🚫 **Evite botões flutuantes sem feedback**: Todo botão deve possuir estado `:hover` com transição elástica e estado `:active` com leve redução de escala (`scale: 0.98`).
- 🚫 **Evite textos não equilibrados em títulos**: Sempre aplique `text-wrap: balance` em `h1` e `h2`.
- 🚫 **Evite cards chapados sem hierarquia**: Todo card deve ter um contorno sutil de borda (1px com opacidade `0.08` a `0.15`) ou elevação suave.

---

## 3. Matriz de Harmonia de Cores (60-30-10 Rule)

- **60% Superfície Dominante**: O fundo e estrutura principal (ex: Dark Graphite ou Warm Cream).
- **30% Estrutura Secundária**: Cards, sidebars, barras de navegação e áreas elevadas.
- **10% Acento Cromático Focal**: Botões de conversão primários (CTA), badges ativos e indicadores de estado.
