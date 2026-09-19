---
name: framer-motion-pro
description: >
  Use when writing, optimizing, or designing animations using Framer Motion, Motion One,
  React Spring, or Web Animations API. Includes layout animations, AnimatePresence,
  useScroll, useTransform, and gesture physics.
  Do NOT use for pure CSS-only static styles without motion.
triggers:
  - framer-motion
  - framer
  - motion
  - layoutId
  - AnimatePresence
  - useScroll
  - useTransform
  - gesture
---

# Framer Motion Pro — Padrões e Arquitetura

Esta skill fornece os blocos de construção e padrões de código definitivos para Framer Motion no ecossistema React.

---

## 1. Variantes Reutilizáveis de Alta Performance

```tsx
import { Variants } from "framer-motion";

export const luxuryTransitions = {
  springSmooth: { type: "spring", stiffness: 120, damping: 20, mass: 1 },
  springSnappy: { type: "spring", stiffness: 320, damping: 26, mass: 0.8 },
  easeExpo: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 }
  }
};

export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: luxuryTransitions.springSmooth
  },
  exit: { opacity: 0, y: -15, filter: "blur(4px)", transition: { duration: 0.2 } }
};
```

---

## 2. Shared Layout Transitions (`layoutId`)

Para elementos que transitam entre diferentes posições (como tabs ativas, cards expansíveis e seletores):

```tsx
// Tab Bar com Indicador Fluido
{tabs.map((tab) => (
  <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className="relative px-4 py-2 text-sm font-medium"
  >
    {activeTab === tab.id && (
      <motion.div
        layoutId="active-indicator"
        className="absolute inset-0 rounded-full bg-white/10 shadow-inner backdrop-blur-md"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
    )}
    <span className="relative z-10">{tab.label}</span>
  </button>
))}
```

---

## 3. Scroll Parallax & Progressive Interpolation

```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleCard = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <div ref={containerRef} className="relative h-[120vh] overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-cover" />
      <motion.div style={{ opacity: opacityText, scale: scaleCard }} className="sticky top-20">
        <h1>Experiência Imersiva</h1>
      </motion.div>
    </div>
  );
}
```
