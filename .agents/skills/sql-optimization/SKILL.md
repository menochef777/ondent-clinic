---
name: sql-optimization
description: >
  Relational database and SQL performance optimization. Covers schema design,
  composite indexing, EXPLAIN ANALYZE interpretation, N+1 query elimination,
  and migration safety for PostgreSQL, MySQL, and Supabase.
  Do NOT use for pure CSS/UI layout styling.
triggers:
  - sql optimization
  - query performance
  - explain analyze
  - database index
  - n+1 query
  - postgresql optimization
  - migration performance
---

# SQL Optimization & Database Performance Engine

Esta skill instrui o agente na análise de planos de execução, criação de índices otimizados e eliminação de gargalos em bancos de dados relacionais.

---

## 1. Regras de Ouro de Indexação

1. **Índices Compostos (Ordem das Colunas)**:
   - Posicione primeiro as colunas de **Igualdade Estrita** (`WHERE status = 'active'`).
   - Posicione depois as colunas de **Faixa / Range** (`AND created_at >= '2026-01-01'`).
   - Posicione por último as colunas de **Ordenação** (`ORDER BY score DESC`).

```sql
-- Exemplo de Índice Composto de Alta Eficiência
CREATE INDEX idx_orders_customer_status_date 
ON orders (customer_id, status, created_at DESC);
```

---

## 2. Diagnóstico de Planos de Execução com `EXPLAIN ANALYZE`

- 🚫 **Seq Scan (Sequential Scan)** em tabelas com $> 10.000$ linhas: Sinaliza falta de índice na coluna de filtro.
- 🚫 **Nested Loop com alto custo**: Sinaliza ausência de índice na chave estrangeira da tabela relacionada.
- ✅ **Index Scan / Index Only Scan**: Operação de alta performance lendo diretamente da árvore B-Tree.

---

## 3. Eliminação do Problema N+1 em APIs

```typescript
// 🚫 Anti-Pattern: N+1 queries separadas em loop
for (const user of users) {
  const profile = await db.query('SELECT * FROM profiles WHERE user_id = $1', [user.id]);
}

// ✅ Padrão Otimizado: Única query com JOIN ou IN clause
const profiles = await db.query(
  'SELECT * FROM profiles WHERE user_id = ANY($1::int[])',
  [users.map(u => u.id)]
);
```
