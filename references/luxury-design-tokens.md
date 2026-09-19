# ✨ Luxury Design Tokens & Aesthetic Blueprints

Este documento cataloga tokens de estilo, paletas P3/HSL, parâmetros de iluminação e elevações para interfaces de alto padrão.

---

## 1. Paletas de Cor & Superfícies (Dark Luxury)

```css
:root {
  /* Superfícies de Fundo */
  --bg-app: #08080a;
  --bg-surface-1: #111115;
  --bg-surface-2: #18181f;
  --bg-surface-glass: rgba(24, 24, 31, 0.65);

  /* Bordas e Linhas de Luz */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-highlight: rgba(255, 255, 255, 0.14);
  --border-glow: rgba(139, 92, 246, 0.3);

  /* Acentos Cromáticos */
  --accent-cosmic-purple: #8b5cf6;
  --accent-electric-cyan: #06b6d4;
  --accent-champagne-gold: #f59e0b;
  --accent-emerald-neon: #10b981;

  /* Texto e Tipografia */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
}
```

---

## 2. Sombras & Efeitos Volumétricos (Elevations)

```css
/* Efeito de Elevação Suave com Luz Atmosférica */
.elevation-luxury-card {
  box-shadow: 
    0 0 0 1px var(--border-subtle),
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 12px 24px -4px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

.elevation-luxury-glow {
  box-shadow:
    0 0 30px -5px rgba(139, 92, 246, 0.25),
    0 0 1px 1px rgba(255, 255, 255, 0.1);
}
```

---

## 3. Tipografia Editorial & Escalas Harmônicas

| Nível | Família Tipográfica Recomendada | Tamanho | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Syne / Cabinet Grotesk (800) | `4rem - 6rem` | `1.05` | `-0.04em` |
| **Section Title** | Clash Display / Satoshi (700) | `2.25rem - 3rem` | `1.15` | `-0.03em` |
| **Card Title** | General Sans / Plus Jakarta (600) | `1.25rem - 1.5rem` | `1.3` | `-0.02em` |
| **Body Text** | Inter / Plus Jakarta Sans (400) | `0.95rem - 1.05rem` | `1.6` | `0em` |
| **Micro Badge** | JetBrains Mono / Geist Mono (500) | `0.75rem` | `1.0` | `+0.06em` |
