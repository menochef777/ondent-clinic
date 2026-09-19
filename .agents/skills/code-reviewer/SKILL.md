---
name: code-reviewer
description: >
  Automated code review engine. Identifies anti-patterns, security flaws, type unsafe logic,
  memory leaks, and performance bottlenecks. Classifies findings into Critical, Medium, and Low.
  Do NOT use for creating greenfield boilerplates.
triggers:
  - code reviewer
  - review code
  - code audit
  - anti-pattern
  - find bugs
  - security audit
  - refactor review
---

# Code Reviewer & Quality Assurance Engine

Esta skill instrui o agente a realizar auditorias rigorosas de código, categorizando apontamentos com soluções claras e objetivas.

---

## 🚦 Matriz de Severidade de Review

| Nível de Severidade | Critério | Exemplos |
| :--- | :--- | :--- |
| 🔴 **CRÍTICO** | Vulnerabilidade de segurança, memory leak, quebra de execução ou perda de dados. | Falta de escape de HTML (XSS), SQL Injection, loop infinito de `useEffect`, chaves secretas expostas. |
| 🟡 **MÉDIO** | Problema de performance, anti-pattern ou falta de tipagem estrita. | N+1 queries, mutação direta de estado no React, uso excessivo de `any` no TypeScript, falta de tratamento de erro em `try/catch`. |
| 🟢 **BAIXO** | Melhoria de legibilidade, simplificação de sintaxe ou alinhamento com convenções. | Nomes de variáveis ambíguos, código morto (dead code), imports não utilizados, formatação inconsistente. |

---

## 📋 Formato de Apontamento de Review

```markdown
### 🔴 [CRÍTICO] Título do Problema

- **Arquivo**: `src/components/Navigation.tsx:42`
- **Diagnóstico**: O `useEffect` não possui array de dependências, causando requisições infinitas à API a cada renderização.
- **Correção Recomendada**:
```tsx
// Antes
useEffect(() => { fetchUserData(); });

// Depois
useEffect(() => {
  fetchUserData();
}, [userId]);
```
```
