# 🌊 Catálogo de Easings & Física de Molas (Springs)

Este documento contém fórmulas matemáticas, valores cúbicos de Bezier e configurações de molas para Framer Motion, CSS e Web Animations API.

---

## 1. Curvas Cúbicas de Bezier

| Nome da Curva | CSS cubic-bezier | Uso Recomendado |
| :--- | :--- | :--- |
| **Expo Out** | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrada de modais, dropdowns, elementos focais |
| **Luxury Smooth** | `cubic-bezier(0.25, 1, 0.5, 1)` | Transições de página, slides contínuos |
| **Snappy Exit** | `cubic-bezier(0.7, 0, 0.84, 0)` | Saída rápida de overlays e menus |
| **Bounce Soft** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Notificações, badges e tooltips lúdicos |
| **Circ In-Out** | `cubic-bezier(0.85, 0, 0.15, 1)` | Movimento contínuo de loop e oscilações |

---

## 2. Dicionário de Springs para Framer Motion

```typescript
export const springPresets = {
  // Para botões, toggles e micro-ações
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 28,
    mass: 0.6
  },
  // Para gavetas (drawers), cards que abrem e modais
  smoothModal: {
    type: "spring",
    stiffness: 140,
    damping: 18,
    mass: 1.0
  },
  // Para expansão de layoutId e cards da galeria
  layoutMorph: {
    type: "spring",
    stiffness: 220,
    damping: 24,
    mass: 0.9
  },
  // Para efeitos de arrasto e soltura (drag and release)
  dragRelease: {
    type: "spring",
    stiffness: 180,
    damping: 15,
    mass: 0.8
  }
};
```

---

## 3. Guia de Coreografia e Stagger

```
[Trigger de Ação]
       │
       ├── 0ms  ──> Backdrop Blur Fade In (opacity 0 -> 1)
       ├── 60ms ──> Modal Container Scale & Y (scale 0.96 -> 1, y 20 -> 0)
       ├── 120ms ─> Título e Header (stagger 0.04s)
       ├── 180ms ─> Corpo de Conteúdo / Cards (stagger 0.05s)
       └── 240ms ─> Ações / Botões de CTA
```
