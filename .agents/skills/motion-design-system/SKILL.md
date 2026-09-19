---
name: motion-design-system
description: >
  Use when designing or planning animations, transition choreographies, micro-interactions,
  spring physics curves, easing functions, and interactive motion systems.
  Do NOT use for backend code or database migrations.
triggers:
  - motion
  - animation
  - micro-interaction
  - easing
  - spring
  - transition
  - physics
  - choreography
---

# Motion Design System & Choreography Engine

Esta skill instrui o agente na criação de animações de alto padrão estético, utilizando física real, curvas de aceleração precisas e timing cognitivo ideal.

---

## 1. Princípios de Física e Timing

### Durações de Referência (Cognitive Timing)
- **Micro-interações (hover, press, toggle)**: `120ms - 200ms`
- **Transições de Componentes (dropdowns, tooltips, dialogs)**: `240ms - 320ms`
- **Transições de Página / Modais / Expansão**: `380ms - 500ms`
- **Movimentos Atmosféricos / Ambientes**: `600ms - 1200ms` (suave com baixa opacidade)

### Curvas de Easing (Cubic Bezier de Elite)
```css
/* Easing Exponencial e Agressivo para Saídas e Entradas Modernas */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-circ: cubic-bezier(0, 0.55, 0.45, 1);
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);
--ease-luxury: cubic-bezier(0.25, 1, 0.5, 1);
--ease-bounce-soft: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 2. Presets de Spring Physics (Molas)

| Perfil de Movimento | Stiffness (Rigidez) | Damping (Amortecimento) | Mass (Massa) | Sensação Tátil |
| :--- | :--- | :--- | :--- | :--- |
| **Luxury Smooth** | `120` | `20` | `1.0` | Movimento suntuoso, sem oscilação excessiva |
| **Snappy / UI Feedback** | `300` | `24` | `0.8` | Rápido, nítido, ideal para botões e switches |
| **Organic Bouncy** | `200` | `12` | `1.0` | Orgânico com leve overshoot elástico |
| **Gentle Fluid** | `80` | `16` | `1.0` | Suave e contínuo, ótimo para cards e painéis |

---

## 3. Padrões de Coreografia Visual

### Staggered Entrance (Entrada em Cascata)
- Nunca faça elementos da mesma lista surgirem juntos.
- Aplique `delay: index * 0.04s` até no máximo `0.4s` de delay total.
- Variação do eixo: `y: 16px -> 0px` combinado com `opacity: 0 -> 1` e `scale: 0.98 -> 1.0`.

### Continuous Magnetic Effect (Botões Magnéticos)
- Calcule a distância entre o cursor do mouse e o centro do elemento.
- Desloque o elemento em `(deltaX * 0.25, deltaY * 0.25)` com spring leve para dar peso magnético.

### Spatial Continuity (Continuidade Espacial)
- Itens que expandem devem manter seu ponto focal (FLIP technique ou `layoutId`).
- A transição do estado fechado para o aberto deve preservar a origem do toque/clique.
