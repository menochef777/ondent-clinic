---
name: frontend-expert
description: >
  Advanced React and modern Frontend architecture. Covers React 19, Suspense,
  Server/Client Component boundaries, type-safe state management (Zustand),
  TanStack Query/Router, performance optimization, and strict TypeScript patterns.
  Do NOT use for pure backend SQL scripts.
triggers:
  - frontend expert
  - react patterns
  - suspense
  - tanstack
  - zustand
  - server components
  - client boundary
  - performance optimization
---

# Frontend Expert — Arquitetura Avançada de React & TypeScript

Esta skill estabelece padrões de nível sênior para ecossistemas modernos de React, Vite, Next.js e TypeScript.

---

## 1. Padrões de Estado com Zustand & Immutability

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UIState {
  theme: "dark" | "luxury";
  isNavOpen: boolean;
  activeFilter: string;
  setNavOpen: (open: boolean) => void;
  setFilter: (filter: string) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        theme: "luxury",
        isNavOpen: false,
        activeFilter: "all",
        setNavOpen: (open) => set({ isNavOpen: open }),
        setFilter: (filter) => set({ activeFilter: filter }),
      }),
      { name: "ui-preferences" }
    )
  )
);
```

---

## 2. Data Fetching Type-Safe com TanStack Query

```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useProjectData(projectId: string) {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await fetch(`/api/projects/${projectId}`);
      if (!res.ok) throw new Error("Falha ao carregar dados do projeto");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutos de cache
    gcTime: 1000 * 60 * 30,
  });
}
```

---

## 3. Diretrizes de Performance React

1. **Prevenção de Re-renders**: Use seletores atômicos no Zustand (`useUIStore(s => s.isNavOpen)`) em vez de desestruturar o objeto inteiro.
2. **Dynamic Imports & Code Splitting**: Carregue bibliotecas pesadas (Three.js, Lucide icons complexos) com `React.lazy()` e `Suspense`.
3. **Memoization Consciente**: Use `useCallback` e `useMemo` apenas quando a referência do objeto/função for passada para componentes encapsulados com `React.memo` ou arrays de dependências complexos.
