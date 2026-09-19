---
name: ponytail
description: >
  Surgical code modification and minimal diff engine. Prevents unnecessary rewrites,
  respects established project patterns, makes the smallest correct change,
  and protects existing working code.
  Do NOT use when a full greenfield rewrite is explicitly requested.
triggers:
  - ponytail
  - minimal diff
  - surgical change
  - preserve existing code
  - no unnecessary rewrite
  - safe refactor
---

# Ponytail — Motor de Alterações Cirúrgicas (Minimal Diff)

Esta skill impede o agente de reescrever arquivos inteiros, alterar convenções consolidadas ou quebrar código existente por excesso de zelo.

---

## 🎯 Princípios Inegociáveis

1. **A Menor Alteração Correta (Minimal Viable Diff)**: Se o bug é corrigido com 3 linhas, não refatore o arquivo inteiro de 300 linhas.
2. **Respeito ao Estilo Existente**:
   - Mantenha a convenção de nomes atual (camelCase, snake_case, etc.).
   - Mantenha a formatação de aspas, ponto-e-vírgula e indentação do arquivo original.
3. **Preservação de Comentários e Docstrings**: Nunca apague comentários existentes que explicam regras de negócio.
4. **Sem Refatorações Ocultas**: Não troque bibliotecas ou padrões sem o consentimento explícito do usuário.
5. **Verificação de Efeito Colateral**: Toda alteração pontual deve checar se afeta importações em outros módulos.
