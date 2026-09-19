---
name: responsive-design-master
description: >
  Use when designing or coding adaptive layouts, fluid typography (CSS clamp),
  container queries, breakpoint hierarchies (Desktop, Tablet, Mobile),
  touch ergonomics, and safe-area constraints.
  Do NOT use for backend server logic.
triggers:
  - responsive
  - mobile layout
  - tablet
  - breakpoints
  - clamp
  - container queries
  - touch target
  - adaptive
  - safe area
---

# Responsive Design Master & Fluid Layout Architecture

Esta skill orienta a construção de interfaces verdadeiramente adaptativas, garantindo que a experiência visual e a ergonomia sejam impecáveis em qualquer proporção de tela.

---

## 1. Tipografia & Espaçamento Fluido (`clamp()`)

Elimine media queries excessivas para tamanhos de fonte e paddings. Use interpolações fluidas contínuas:

```css
:root {
  /* Tipografia Fluida (Escala contínua entre 360px e 1440px de viewport) */
  --font-hero: clamp(2.5rem, 1.8rem + 3.5vw, 5.5rem);
  --font-h1: clamp(2rem, 1.5rem + 2.2vw, 3.75rem);
  --font-h2: clamp(1.5rem, 1.2rem + 1.4vw, 2.5rem);
  --font-body: clamp(0.95rem, 0.9rem + 0.25vw, 1.125rem);

  /* Espaçamento Fluido */
  --space-section: clamp(4rem, 3rem + 5vw, 9rem);
  --space-card-padding: clamp(1.25rem, 1rem + 1.2vw, 2.5rem);
  --space-gap-grid: clamp(1rem, 0.8rem + 1vw, 2rem);
}
```

---

## 2. Container Queries Modernas (`@container`)

Desenvolva componentes que reagem ao tamanho do **container pai**, não apenas à tela inteira:

```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 480px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1.5rem;
  }
}
```

---

## 3. Matriz de Breakpoints & Ergonomia Tátil

| Dispositivo | Viewport | Colunas de Grid | Regra Tátil & Motion |
| :--- | :--- | :--- | :--- |
| **Mobile Portrait** | `< 640px` | 1 coluna (`100%`) | Alvos de toque $\ge 48\times 48\text{px}$, CTAs fixos inferiores (*thumb zone*), sem parallax pesado |
| **Tablet Portrait** | `640px - 1024px` | 2 colunas | Menus colapsáveis, padding lateral generoso (`5vw`) |
| **Desktop / Laptop** | `1024px - 1536px`| 3-4 colunas | Micro-interações de hover ativadas, cursor magnético |
| **Ultra-Wide Screens**| `> 1536px` | Max-width `1440px`| Centralização com margens fluidas para evitar linhas longas de leitura |

---

## 4. Checklist Mobile de Excelência

- [ ] Áreas de toque com `min-height: 48px` e `min-width: 48px`.
- [ ] Suporte a Safe Areas do iOS com `env(safe-area-inset-top)` e `env(safe-area-inset-bottom)`.
- [ ] Prevenção de quebra de layout horizontal com `overflow-x: clip` no container raiz.
- [ ] Animações pesadas de WebGL/Three.js com taxa de amostragem reduzida em baterias móveis (`pixelRatio: Math.min(window.devicePixelRatio, 1.5)`).
