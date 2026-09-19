# 🧠 Antigravity Meta-Guide: Arquitetura, Comandos e Customizações

Este documento consolida a camada de **meta-inteligência** do Antigravity, ensinando como o agente opera, como o sistema de contexto funciona e como criar ou expandir novas skills e regras.

---

## 1. As 5 Camadas de Customização do Antigravity

| Tipo | Localização de Arquivo | Escopo & Comportamento | Quando Usar |
| :--- | :--- | :--- | :--- |
| **Rules** | `AGENTS.md`, `GEMINI.md`, `.agents/rules/*.md` | **Hierárquico / Sempre Ativo** | Diretrizes inegociáveis, convenções de código, restrições e diretrizes de design. |
| **Skills** | `.agents/skills/<nome>/SKILL.md` ou `~/.gemini/config/skills/` | **Progressive Disclosure (Sob Demanda)** | Procedimentos passo a passo, snippets complexos, catálogos e especializações temáticas. |
| **Plugins** | `plugins/<nome>/plugin.json` | **Pacote Completo** | Agrupamento de múltiplas skills, regras e configurações MCP em um único bundle. |
| **Hooks** | `hooks.json` | **Eventos de Ciclo de Vida** | Execução de scripts pré/pós ferramentas ou inicialização de sessão. |
| **MCP Servers**| `mcp_config.json` | **Extensões de Ferramentas** | Integração com ferramentas externas (Imagen 3, Veo, GitHub, APIs customizadas). |

---

## 2. Ordem de Prioridade e Precedência (Loading Priority)

Quando existem arquivos com nomes coincidentes, o Antigravity resolve na seguinte ordem (do mais prioritário para o menor):

1. **Workspace Project Local** (`.agents/` ou `.agent/` na raiz do repositório atual) — **Prioridade Máxima**
2. **Configurações Declaradas no Workspace** (`skills.json`, `plugins.json`)
3. **Global Discovery** (`~/.gemini/config/` ou `~/.gemini/antigravity/skills/`)
4. **Skills Built-in** (Nativas do sistema Antigravity)
5. **Configurações Declaradas Globais**

---

## 3. Slash Commands Nativos & Fluxos Agênticos

- **`/goal`**: Executa tarefas longas e complexas de forma contínua e autônoma, sem parar até que o objetivo esteja 100% concluído e verificado.
- **`/grill-me`**: Inicia uma entrevista interativa onde o agente faz perguntas estratégicas para fechar o design e arquitetura antes de escrever código.
- **`/learn`**: Registra e persiste na memória de longo prazo correções do usuário ou padrões aprendidos durante a sessão.
- **`/schedule`**: Agenda tarefas recorrentes em background (cron jobs) ou timers de notificação.

---

## 4. Como Criar uma Nova Skill no `cerebro` em 3 Passos

Para ensinar ao agente uma nova tecnologia, biblioteca ou padrão:

### Passo 1: Criar a pasta
```powershell
mkdir -p ".agents\skills\minha-nova-skill"
```

### Passo 2: Criar o `SKILL.md` com YAML Frontmatter
```markdown
---
name: minha-nova-skill
description: >
  Use when [situação em que deve ativar].
  Fornece [o que ela faz].
  Do NOT use for [o que NÃO deve fazer].
triggers:
  - palavra-chave-1
  - palavra-chave-2
---

# Nome da Skill

Instruções claras, padrões de código e convenções...
```

### Passo 3: Reiniciar ou Iniciar Nova Sessão
O Antigravity indexa os metadados do YAML automaticamente em microssegundos e ativa o conteúdo completo apenas quando as palavras-chave ou intenção forem detectadas.
