# Unidade I: Fundamentos de coleta de dados

## Notas de Estudo: Preparação, Integração e Governança de Dados

### 1. Dados, Informação e Inteligência

A transformação de dados brutos para inteligência acionável é o núcleo de qualquer estratégia analítica.

- Dados: Registros soltos, desprovidos de contexto ou análise prévia. Representam os blocos construtivos fundamentais de qualquer sistema.
- Informação: Consiste na estruturação e organização dos dados, conferindo-lhes significado e contexto inicial.
- Conhecimento: Entendimento humano ou algorítmico de padrões baseados na informação gerada. Envolve a capacidade de agir e prever resultados com base em um repertório.
- Inteligência: A capacidade de aprender com a experiência, resolver problemas complexos e adaptar-se rapidamente a novas situações e cenários de negócios.

```mermaid
graph LR
A[Dados Brutos] -->|Processamento| B[Informacao]
B -->|Analise e Sintese| C[Conhecimento]
C -->|Aprendizagem e Experiencia| D[Inteligencia]
```

### 2. Business Intelligence (BI) e Self-Service BI (SSBI)

O 'Business Intelligence' (BI) abrange os aplicativos, infraestrutura e melhores práticas que permitem o acesso e a análise de informações para otimizar decisões corporativas. Os dados coletados passam por processos rigorosos de extração, transformação e carga em estruturas informacionais otimizadas.

O 'Self-Service BI' (SSBI) surge como uma evolução focada no conceito de autosserviço.

- Democratização: Habilita profissionais de negócios de todos os níveis (operacional, tático e estratégico) a gerar relatórios por conta própria.
- Necessidade de Apoio: O fornecimento isolado de acesso a ferramentas falha na maioria dos casos. São mandatórios processos estruturados de treinamento, suporte contínuo da TI e integração cultural para que os usuários produzam resultados analíticos significativos.

### 3. Governança de Dados

Definida como o exercício de autoridade, planejamento, segurança e monitoramento sobre os ativos de dados da empresa. Sem ela, aplicações de SSBI tendem a gerar caos e inconsistência. A implementação demanda atuação em 9 eixos principais:

- Requisitos e Patrocínio: Conformidade com leis (como a LGPD) e apoio incondicional de lideranças.
- Objetivos e Resultados Chave: Definição clara de diretrizes motivacionais para a empresa.
- Escritório de Governança: Criação de um grupo de guardiões focado na gestão de pessoas, processos e tecnologias relativas aos dados.
- Dados Críticos de Negócio: Foco no que gera maior valor ou está associado aos maiores riscos, pautado pelo custo-benefício.
- Catálogo e Linhagem de Dados (Data Lineage): Registro e rastreamento completo da jornada do dado desde sua origem até seu consumo.
- Normas e Procedimentos: Instrumentos para compartilhar melhores práticas, aumentar produtividade e manter a qualidade operacional.
- Camada de Acesso e Compartilhamento: Interfaces entregues aos clientes internos com suporte e manutenção tecnológica da TI.
- Qualidade dos Dados: Mecanismos para medir a integridade das informações via avaliação contínua dos usuários. Dados ruins inevitavelmente levam a decisões ruins.
- Segurança dos Dados: Proteção diferencial para informações sensíveis e pessoais via controle de acessos e protocolos de criptografia.

### 4. Implementação e Definição de Arquitetura

A adoção de fluxos analíticos passa por um planejamento sistemático (referenciado no ciclo de vida de Kimball).

- Requisitos e Realidades: Começa pelo entendimento das necessidades do negócio via reuniões, acompanhado pelo 'Data Profiling' (Perfil de Dados). A análise sistemática da qualidade original da fonte de dados dita o grau de intervenção e esforço sistêmico exigido.
- Arquitetura e Definições: Etapa estrutural de escolha das ferramentas tecnológicas, identificação e alocação dos caminhos dos dados, definição de dependências e agendamento contínuo das atualizações de carga.

### 5. Insights / Conexão com IA/ML

- Base Algorítmica: O perfilamento e a governança dos dados ditam o potencial máximo de qualquer modelo de 'Machine Learning' ou 'Deep Learning'. Estruturas negligenciadas geram viés e destroem o desempenho preditivo (o clássico princípio 'Garbage In, Garbage Out').
- Métrica Contínua de Qualidade: Durante o preparo de datasets para algoritmos preditivos, a saúde de uma feature é frequentemente calculada por modelagens simples de completude matemática, representada pela fórmula estatística: $C = \frac{Registros\_Validos}{Total\_Esperado}$. Isso assegura que variáveis esparsas sejam filtradas na arquitetura antes do treinamento.
- Evolução Prescritiva: Com as fundações de armazenamento e acesso consolidadas pelos requisitos do negócio, as organizações conseguem escalar análises descritivas para sistemas prescritivos com IA, onde as ferramentas passam a sugerir ações otimizadas autonomamente.

---

[Previous](../04-data-preparation-and-integration/summary.md) | [Next](./02-data-delivery.md)
