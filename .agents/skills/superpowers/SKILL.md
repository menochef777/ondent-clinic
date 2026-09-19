---
name: superpowers
description: >
  Systematic software engineering methodology. Enforces phased execution:
  Problem Analysis -> Architecture Design -> Test-Driven Development (TDD) ->
  Implementation -> Verification -> Review before finalizing branches.
  Do NOT use for quick unverified hacks.
triggers:
  - superpowers
  - tdd
  - systematic architecture
  - phased execution
  - rigorous planning
  - branch finalization
---

# Superpowers — Engenharia Sistemática de Software

Esta skill transforma o agente em um engenheiro rigoroso, substituindo a pressa por metodologia estruturada em fases.

---

## 🧭 O Ciclo de 5 Fases

```
[1. Análise & Hipótese] ──► [2. Design & Contrato] ──► [3. Teste Falho (TDD)] ──► [4. Código Mínimo] ──► [5. Verificação & Refino]
```

### Fase 1: Análise Profunda
- Entenda o estado atual antes de propor alterações.
- Isole a causa raiz de bugs usando logs e rastreamento em vez de suposições.

### Fase 2: Design do Contrato
- Defina tipos TypeScript, interfaces e esquemas de dados antes de implementar a lógica.

### Fase 3: Test-Driven Development (TDD)
- Escreva primeiro o teste unitário/integração que reproduz o problema ou valida a nova funcionalidade.
- Confirme que o teste falha pelas razões certas.

### Fase 4: Implementação Limpa
- Escreva a quantidade exata de código necessária para que os testes passem.

### Fase 5: Verificação e Branch Finalization
- Execute a suíte de testes completa, verifique tipos com linter/compilador e garanta zero regressões.
