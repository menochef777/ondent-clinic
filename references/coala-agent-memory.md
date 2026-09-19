# 🧠 Arquitetura de Memória CoALA (Cognitive Architectures for Language Agents)

Este documento define a arquitetura cognitiva de memória do agente no **Cérebro**, baseada no framework acadêmico **CoALA (Princeton/CMU)** com armazenamento vetorial e persistência hierárquica.

---

## 🏛️ Os 4 Pilares da Memória CoALA

```
                    ┌──────────────────────────────────────────────┐
                    │            AGENTE COGNITIVO                  │
                    │         (Antigravity / Claude)               │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌──────────────────┬──────────────┴─────┬──────────────────┐
         │                  │                    │                  │
         ▼                  ▼                    ▼                  ▼
┌─────────────────┐┌─────────────────┐┌────────────────────┐┌──────────────────┐
│ WORKING MEMORY  ││PROCEDURAL MEMORY││  SEMANTIC MEMORY   ││ EPISODIC MEMORY  │
│ (Curto Prazo)   ││(Habilidades)    ││ (Conhecimento Vet) ││ (Experiências)   │
│                 ││                 ││                    ││                  │
│ • Context Window││ • .agents/skills││ • references/*.md  ││ • logs / runs    │
│ • Prompt atual  ││ • AGENTS.md     ││ • Embeddings 768d  ││ • /learn commits │
│ • Scratchpad    ││ • Hooks / Tools ││ • Vector DB        ││ • Transcripts    │
└─────────────────┘└─────────────────┘└────────────────────┘└──────────────────┘
```

---

## 1. Memória de Trabalho (Working Memory)
- **Substrato**: Context Window de 1M de tokens do Gemini / Claude.
- **Função**: Raciocínio imediato, planejamento em memória, árvore de pensamentos (*chain-of-thought*) e estado ativo dos arquivos abertos.
- **Ciclo de Vida**: Volátil (dura enquanto a tarefa ou sessão estiver ativa).

---

## 2. Memória Procedural (Procedural Memory)
- **Substrato**: `.agents/skills/`, `AGENTS.md`, `CLAUDE.md` e regras de código.
- **Função**: O "saber como fazer" (*Know-How*). Inclui:
  - Fórmulas de molas (`motion-design-system`)
  - Padrões de código React (`framer-motion-pro`)
  - Estrutura de prompts cinematográficos (`creative-asset-director`)
- **Ciclo de Vida**: Permanente e versionado no Git.

---

## 3. Memória Semântica Vetorial (Semantic Memory / Vector Storage)
- **Substrato**: `references/*.md` indexados via Embeddings (`text-embedding-004` / Chroma / LanceDB).
- **Função**: Fatos conceituais, tokens de design, documentação de bibliotecas, boas práticas e glossários de termos.
- **Mecanismo de Recuperação**: Busca semântica por similaridade de cosseno com ranking de relevância HNSW.

---

## 4. Memória Episódica (Episodic Memory)
- **Substrato**: Transcripts em `.system_generated/logs`, histórico de commits e memórias capturadas pelo comando `/learn`.
- **Função**: Registro histórico de execuções anteriores, correções do usuário, decisões de design passadas e padrões que funcionaram ou falharam em projetos anteriores.
- **Ciclo de Vida**: Cumulativa e persistente.
