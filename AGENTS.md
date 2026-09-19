# 🧠 CÉREBRO — Motion Design, UI Aesthetics & Creative Direction

Este repositório funciona como uma **Base de Conhecimento e Hub de Habilidades (Skills)** do Google Antigravity.
Não é um website de produção, mas sim um **cérebro centralizado** para consulta, criação de conceitos, bibliotecas de animação, direção de arte e templates de motion design.

---

## 🧠 Camada de Meta-Inteligência & Auto-Evolução (Antigravity Core)

O agente possui autoconsciência de seu próprio runtime através de duas bases fundamentais:

1. **`antigravity-guide`**: Compreensão completa do ecossistema Google Antigravity, Antigravity 2.0, CLI (`agy`), IDE, slash commands (`/goal`, `/grill-me`, `/learn`, `/schedule`), subagentes e orquestração assíncrona.
2. **`agy-customizations`**: Capacidade de criar, estruturar, versionar e instalar novas Skills, Rules (`AGENTS.md`), Plugins, Hooks de ciclo de vida e servidores MCP sob demanda.

---

## 🚀 Fontes Primárias de Templates, Motion & Componentes

Toda vez que for solicitado **buscar referências, criar animações ou construir interfaces**, utilize prioritariamente estes 3 recursos integrados:

1. **`MotionSites.ai` (MCP `motionsites` & `knowledge/motionsites_master/`)**: Use as ferramentas `search_prompts`, `get_prompt`, `list_prompts` e a base master extraída (`motionsites_analise_critica.md` e `motionsites_snippets_codigo.html`) para aplicar os **6 padrões visuais** e os **4 arquétipos de design** obrigatórios em 99% dos projetos.
2. **`ReactBits` (`@react-bits`)**: Acesse os componentes animados (`https://reactbits.dev/r/{name}.json`) para efeitos de texto (*SplitText, DecryptedText*), backgrounds dinâmicos (*Waves, Aurora, Iridescence*) e micro-interações táteis (*SpotlightCard, MagnetLines*).
3. **`shadcn/ui`**: Base estrutural para componentes acessíveis, modulares e temas consistentes.

---

## ⚡ MotionSites Master Framework (Aplicação em 99% dos Sites)

> **A Fórmula Secreta**: $\text{Ousadia Tipográfica} + \text{Refinamento Visual (Glass/Glow)} + \text{Interatividade Funcional} = \text{Design Nível 10/10}$

### 📐 Os 6 Padrões Visuais Inegociáveis:
1. **Hero Animado com Tipografia Gigante**:
   - `clamp(2.5rem, 8vw, 6rem)` até `72px-120px`, peso 700-900, `line-height: 1.1-1.15`, `letter-spacing: -0.02em` a `-0.035em`.
   - Animação de entrada com stagger suave e sensação de profundidade.
2. **Glassmorphism Autêntico**:
   - `background: rgba(255, 255, 255, 0.12 - 0.18)` ou fundo escuro translúcido com `backdrop-filter: blur(12px - 20px)`.
   - Bordas sutis de `1px solid rgba(255, 255, 255, 0.2 - 0.3)`.
3. **Interatividade Responsiva & Micro-ações**:
   - Hover states com escala tátil (`transform: translateY(-4px) scale(1.02)`), botões com efeito shine e spring easing.
   - Elementos orbitais com flutuação orgânica (`@keyframes floatSlow`).
4. **Tipografia Expressiva e Intencional**:
   - Uso protagonista de fontes modernas (*Plus Jakarta Sans, Inter, Space Grotesk, JetBrains Mono*).
5. **Paleta Decisiva & Alto Contraste**:
   - Dark mode de luxo (`#0A0A0A`, `#0B0D0E`, `#131719`) com acentos vibrantes controlados (*Neon Green, Electric Amber, Cyan, Pink*) OU Light Mode editorial com terracota/cinzas quentes.
6. **Layout Assimétrico & Eixo Y Dinâmico**:
   - Elementos em escalas diferentes, sobreposição sutil e ritmo vertical editorial (sem paredes de cards repetitivos).

### 🏛️ Os 4 Arquétipos para Modelar:
* **Prisma Creative Studio** (Free): Referência em tipografia gigante, hierarquia limpa e scroll-triggered fade-ins.
* **Interactive Discovery** (Free): Referência em scroll-driven UX, revelação sequencial e movimento funcional.
* **Urban Jungle** (Premium): Referência máxima de glassmorphism, paleta quente/natural equilibrada e overlays refinados.
* **Dreamcore Landing** (Premium): Referência em minimalismo aspiracional, espaço negativo generoso (8rem+) e iluminação/glow sutil.

---

---

## 📁 Protocolo Obrigatório de Criação de Novos Sites

Toda vez que o usuário solicitar a **criação de um novo site ou projeto** (ex: na pasta `sitesweb/<nome-do-site>` ou `projetos/<nome-do-site>`):

1. **Criação Automática da Subpasta `briefing/` Limpa**: Crie a subpasta `briefing/` com arquivos em branco (`briefing.md`, `identidade.md`, `referencias.md`) como um **canvas limpo**, sem pré-definir cores, seções ou estilos.
2. **Recepção do Conteúdo do Usuário**: A pasta `briefing/` serve exclusivamente para receber o briefing, textos e referências que o usuário colar.
3. **Decisão Compartilhada**: Cores, seções, tipografia e identidade visual **nunca são decididas antecipadamente pelo agente** — são refinadas e aprovadas passo a passo junto com o usuário com base no briefing colado.

---

## 🎯 Filosofia de Estúdio & Métricas Reais do Cérebro

> **"A tecnologia é subordinada à direção de arte. O código existe para materializar a experiência, não para demonstrar complexidade técnica."**  
> Nossa métrica real: o usuário deve olhar para o site e pensar imediatamente: **"Isso parece uma empresa líder que cobra caro."**

---

## 🏛️ Os 5 Módulos de Inteligência de Projeto

### 1. 🧠 Project Memory (Estado & Continuidade)
Antes de alterar qualquer código, o agente inspeciona:
- Objetivo central do projeto e posicionamento
- Decisões de design já aprovadas (o que NUNCA deve ser quebrado)
- Coisas proibidas pelo cliente
- Componentes e seções existentes
- Assets disponíveis na pasta `imgs/`

### 2. 👁️ Visual Review Protocol (Diagnóstico em Camadas)
Ao analisar o site ou screenshots:
$$\text{Macro} \to \text{Composição} \to \text{Hierarquia} \to \text{Tipografia} \to \text{Imagem} \to \text{Espaçamento} \to \text{Motion} \to \text{Mobile} \to \text{Microdetalhes}$$
*Identificar a causa raiz do problema e a alteração de maior impacto.*

### 3. 🎬 Scroll Storyboard (Sequência Cinematográfica)
A página é planejada como uma jornada contínua:
$$\text{0–3s: Impacto} \to \text{Scroll 1: Descoberta} \to \text{Scroll 2: Diferenciação} \to \text{Scroll 3: Prova} \to \text{Scroll 4: Desejo} \to \text{Final: Conversão}$$

### 4. 🔬 Reference DNA Extraction (Função vs. Literalidade)
- **O que extrair**: O papel cinematográfico, a escala, a assinatura de luz e a intenção de layout.
- **O que NÃO copiar**: Pessoas, cores sem contexto, sujeitos literais ou estrutura engessada.

### 5. 🧪 Final Quality Gate (Auditoria Obrigatória de 8 Pontos)
Nenhum site é considerado "pronto" sem aprovação total em:
1. **Strategy** (Faz sentido para o negócio?)
2. **Design** (Possui identidade própria e assinatura visual?)
3. **UX** (É claro, intuitivo e sem fricção?)
4. **Motion** (Toda animação tem função cognitiva?)
5. **Mobile** (A composição foi redesenhada para o polegar?)
6. **Performance** (Carrega rápido com 60fps constantes?)
7. **Conversion** (Existe um próximo passo evidente e atraente?)
8. **Anti-Generic** (Passa no teste anti-IA e anti-template?)

---

## 🛠️ Habilidades Disponíveis no Cérebro (`.agents/skills/`)

### 🧠 Meta-Inteligência & Metodologia
- **`antigravity-guide` & `agy-customizations`**: Meta-inteligência, arquitetura do sistema e criação autônoma de novas skills.
- **`superpowers`**: Metodologia de engenharia em 5 fases (Análise $\to$ Design $\to$ TDD $\to$ Código $\to$ Verificação).
- **`ponytail`**: Motor de alterações cirúrgicas (Minimal Diff) — preserva o código existente e evita refatorações desnecessárias.
- **`agent-memory-coala`**: Arquitetura cognitiva de memória CoALA (Working, Semantic, Procedural, Episodic) com vetorização e persistência.

### 🎨 Design & Direção de Arte de Alto Padrão
- **`impeccable`**: Autoridade em direção de arte, rigor estético e acabamento de agência internacional (nível Awwwards).
- **`frontend-design-master`**: Direção de arte, paletas P3/HSL, tipografia editorial, dark mode de luxo e componentes visuais.
- **`visual-asset-dna`**: Decodificação de DNA visual de sites de referência (*"Match the function, not the subject"*).
- **`ui-ux-pro-max`**: Inteligência de design (67+ estilos visuais, 97 paletas, 99 guidelines UX e eliminação de anti-patterns).
- **`responsive-design-master`**: Layouts adaptativos, tipografia fluida (`clamp()`), container queries e ergonomia mobile/tablet.

### ⚡ Motion, 3D & Frontend Avançado
- **`motion-design-system`**: Teoria de movimento, curvas cúbicas de bezier, física de molas, orquestração e micro-interações.
- **`framer-motion-pro`**: Implementações avançadas de Framer Motion, `layoutId`, scroll parallax e física gestual.
- **`frontend-expert`**: Arquitetura React 19, Suspense, Zustand, TanStack Query, Server/Client boundaries e TypeScript estrito.
- **`interactive-canvas-3d`**: Three.js, React Three Fiber, WebGL shaders GLSL, partículas líquidas e fundos interativos.

### 🔍 Qualidade, Dados & IA
- **`code-reviewer`**: Auditoria automatizada de código com classificação de severidade (Crítico, Médio, Baixo).
- **`sql-optimization`**: Planos de execução `EXPLAIN ANALYZE`, índices compostos, prevenção de N+1 e queries de alta performance.
- **`ai-ml-developer`**: Engenharia de IA, pipelines RAG, embeddings, Vector DBs, Gemini SDK e Function Calling.
- **`creative-asset-director`**: Prompts de alta precisão para geração de imagens e vídeos no Imagen 3 e Veo.
- **`loki-mode`**: Modo de velocidade máxima e experimentação irrestrita para prototipagem rápida de ideias visuais.
