---
name: agent-memory-coala
description: >
  Use when designing, configuring, or interacting with agent memory architectures,
  CoALA cognitive frameworks (Working, Episodic, Semantic, Procedural),
  Vector storage retrieval, and long-term memory persistence.
  Do NOT use for pure CSS layout without memory logic.
triggers:
  - agent memory
  - coala
  - episodic memory
  - semantic memory
  - procedural memory
  - working memory
  - vector memory
  - long term memory
  - memory persistence
---

# CoALA Agent Memory & Vector Storage Engine

Esta skill instrui o agente a operar utilizando a taxonomia cognitiva **CoALA (Cognitive Architectures for Language Agents)** com armazenamento vetorial para memória semântica e episódica.

---

## 1. Mapeamento de Memória para Agentes Autônomos

```python
from dataclasses import dataclass
from typing import List, Dict, Any

@dataclass
class CoALAMemoryBank:
    working_memory: Dict[str, Any]    # Contexto ativo da sessão e variáveis de execução
    procedural_memory: List[str]     # Caminhos das Skills e ferramentas registradas
    semantic_vector_store: Any       # Indexador vetorial de documentos e referências
    episodic_memory_log: List[Dict]   # Histórico de trajetórias, aprendizados e decisões
```

---

## 2. Protocolo de Recuperação Vetorial em 3 Fases

1. **Query Encoding**: Transforma o objetivo da tarefa ou pergunta do usuário em um vetor de alta densidade (768 dimensões com `text-embedding-004`).
2. **Dense Retrieval (Busca Semântica)**: Executa busca de vizinhos mais próximos (KNN / HNSW) nas memórias Semântica e Episódica.
3. **Context Injection**: Injeta apenas os top-K fragmentos de memória mais relevantes na Memória de Trabalho (*Working Memory*), evitando poluição do contexto.

---

## 3. Diretrizes de Persistência de Memória

- **Persistência de Erros e Correções**: Toda vez que o usuário corrigir uma convenção ou preferência visual, registre uma entrada de memória episódica para nunca repetir o erro.
- **Deduplicação Semântica**: Antes de salvar um novo conceito, verifique se a distância de cosseno $> 0.88$ em relação a uma memória existente para atualizar em vez de duplicar.
