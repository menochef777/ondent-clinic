---
name: frontend-design-master
description: >
  Use when designing aesthetic UI architectures, defining color systems (HSL/OKLCH),
  glassmorphism tokens, typography scales, luxury dark mode, and editorial visual direction.
  Do NOT use for backend APIs, database indexing or devops.
triggers:
  - design system
  - ui design
  - aesthetics
  - glassmorphism
  - dark luxury
  - typography
  - color palette
  - layout
---

# Frontend Design Master & Luxury Aesthetic Architecture

Esta skill orienta a concepção de interfaces digitais sofisticadas, eliminando o visual corporativo genérico e elevando o padrão para nível editorial/luxury tech.

---

## 1. Sistema de Cores e Iluminação

### OKLCH / HSL Refinado (Dark Luxury Palette)
- **Base Surface**: `hsl(240, 6%, 6%)` (#0e0e11) — preto quente com leve tonalidade grafite/índigo.
- **Card Elevated**: `hsla(240, 5%, 12%, 0.7)` com `backdrop-filter: blur(16px)`.
- **Border Highlight**: `hsla(0, 0%, 100%, 0.08)` (1px suave com brilho perolado).
- **Primary Accent**: `hsl(265, 89%, 66%)` (Violeta Cósmico) ou `hsl(38, 92%, 50%)` (Ouro Champanhe).
- **Secondary Accent**: `hsl(188, 86%, 53%)` (Ciano Luminescente).

### Tokens de Efeito Glassmorphism de Alta Fidelidade
```css
.glass-panel {
  background: radial-gradient(120% 120% at 50% 0%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%),
              rgba(14, 14, 18, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
```

---

## 2. Tipografia e Ritmo Vertical

### Combinações Tipográficas de Elite
1. **Editorial Avant-Garde**:
   - Títulos: *Cabinet Grotesk*, *Syne* ou *Clash Display* (Weight: 700-800, Letter-spacing: -0.03em)
   - Corpo: *Plus Jakarta Sans* ou *Inter* (Weight: 400-500, Line-height: 1.6)
2. **Modern Swiss Precision**:
   - Títulos: *General Sans* ou *Satoshi* (Weight: 600, Letter-spacing: -0.02em)
   - Mono/Detalhes: *JetBrains Mono* ou *Geist Mono* (Weight: 400, Uppercase, Tracking: 0.08em)

---

## 3. Checklist de Excelência Visual

- [ ] Nenhum cinza puro (`#888888`) ou preto puro (`#000000`) chapado sem textura/gradiente sutil.
- [ ] Bordas com `inset shadow` ou gradientes de 1px simulando reflexo de luz.
- [ ] Micro-detalhes tipográficos: `text-wrap: balance` em títulos e `font-feature-settings: "cv02", "cv03", "cv04", "cv11"`.
- [ ] Iluminação de fundo: Glows radiais suaves (`background: radial-gradient(circle at center, rgba(120, 80, 255, 0.12) 0%, transparent 70%)`).
