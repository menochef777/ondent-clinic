---
name: ai-ml-developer
description: >
  Use when designing, implementing, or optimizing Machine Learning models, LLM integrations,
  Retrieval-Augmented Generation (RAG) pipelines, Vector Databases, Google Gemini / Vertex AI SDKs,
  PyTorch training loops, and Agentic tool calling.
  Do NOT use for pure HTML/CSS static styling without AI logic.
triggers:
  - ai developer
  - machine learning
  - ml
  - llm
  - rag
  - embeddings
  - vector search
  - gemini api
  - vertex ai
  - pytorch
  - huggingface
  - fine-tuning
  - function calling
---

# AI & Machine Learning Developer Engine

Esta skill transforma o agente em um **Engenheiro Especialista em IA e Machine Learning**, cobrindo desde arquiteturas RAG e integração de LLMs até pipelines de dados e modelos preditivos em Python/TypeScript.

---

## 1. Arquitetura RAG de Alta Precisão (Retrieval-Augmented Generation)

### Pipeline de Chunking Semântico & Embeddings

```python
from google import genai
from google.genai import types
import numpy as np

client = genai.Client()

def generate_semantic_embeddings(texts: list[str], model: str = "text-embedding-004") -> list[list[float]]:
    """Gera embeddings semânticos densos de 768 dimensões com normalização L2."""
    response = client.models.embed_content(
        model=model,
        contents=texts,
        config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT")
    )
    embeddings = [e.values for e in response.embeddings]
    return embeddings

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a_arr, b_arr = np.array(a), np.array(b)
    return float(np.dot(a_arr, b_arr) / (np.linalg.norm(a_arr) * np.linalg.norm(b_arr)))
```

---

## 2. LLM Tool Calling Estruturado (Function Calling)

Padrão para agentes que executam ferramentas reais com validação de esquema:

```python
def weather_tool(location: str) -> dict:
    """Busca previsão do tempo para uma localidade."""
    return {"location": location, "temperature": "24C", "condition": "Sunny"}

# Configuração de chamada de ferramenta no Gemini SDK
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Qual a temperatura atual em Lisboa?",
    config=types.GenerateContentConfig(
        tools=[weather_tool],
        temperature=0.2,
    )
)
```

---

## 3. Padrões MLOps & Boas Práticas

1. **Deterministic Sampling**: Use `temperature=0.0 - 0.2` para extração estruturada de dados, JSON schemas e classificação.
2. **Context Compression**: Aplique *Re-ranking* (ex: Cohere Rerank / Cross-Encoders) para selecionar apenas os top 3-5 chunks mais relevantes antes de injetar no prompt do LLM.
3. **Guardrails & Evaluation**:
   - Valide saídas de JSON usando **Pydantic** ou **Zod**.
   - Meça alucinações com métricas RAGAS (Context Precision, Faithfulness, Answer Relevance).
4. **Vector Search Indexing**:
   - Utilize índices **HNSW** (Hierarchical Navigable Small World) com métrica de distância Cússeno para consultas de baixa latência (<15ms).
