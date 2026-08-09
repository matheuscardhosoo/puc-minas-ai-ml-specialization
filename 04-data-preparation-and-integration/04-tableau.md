# Unidade IV: Estruturação e Carga usando ferramenta TABLEAU PREP

## Projetos ETL e Preparação de Dados com Tableau

### Objetivos da Unidade

- Familiarizar-se com a ferramenta 'Tableau Prep' para processamento de dados.
- Desenvolver massas de dados robustas por meio da integração de múltiplas fontes.
- Criar e orquestrar processos de limpeza e transformação de dados (ETL).
- Executar testes de validação e garantir a operação continua dos fluxos de dados.
- Explorar recursos e documentação complementar, como a Comunidade Tableau, para resolução de problemas corporativos.

### 1. Entendimento do Cenário: Carga de Vendas por Região

O desenvolvimento de um projeto estruturado de dados baseia-se em problemas reais do cotidiano corporativo. Neste cenário, o objetivo central e consolidar os dados de vendas que estão dispersos por diferentes regiões e sistemas. A complexidade deste tipo de projeto reside na heterogeneidade dos dados: formatos distintos, valores nulos, duplicidades e métricas nao padronizadas. O primeiro passo de qualquer projeto de Engenharia de Dados ou de preparação para Machine Learning e o levantamento de requisitos de negocio, respondendo a perguntas como: O que define uma venda bem-sucedida? Como as regiões estão segmentadas?

### 2. Integração de Múltiplas Fontes de Dados

Em arquiteturas de dados modernas, a informação raramente reside em um único banco de dados. A extração ocorre a partir de bancos relacionais, arquivos CSV, planilhas Excel, APIs e sistemas legados. A utilização do 'Tableau Prep' facilita a conexão com essas origens, permitindo um mapeamento visual dos relacionamentos ('Joins' e 'Unions').

### 3. Construção do Conceito Único (Single Source of Truth)

A fragmentação de dados gera inconsistências. O processo ETL deve criar entidades únicas e confiáveis, processo conhecido no mercado como Master Data Management (MDM).

- Conceito Único de Cliente: Consiste em unificar registros do mesmo cliente espalhados por diversas fontes. Se um cliente existe no sistema de vendas do Sul e do Sudeste com IDs diferentes, o processo de ETL deve criar uma chave única (Golden Record) para rastrear todo o histórico de relacionamento de forma centralizada.
- Conceito Único de Pedidos: Semelhante ao cliente, os pedidos devem ter uma padronização (mesma moeda, mesmo formato de data, impostos unificados) para permitir agregações confiáveis.

### 4. Limpeza, Transformação, Testes e Operação

Apos a extração e a unificação das entidades, aplica-se a limpeza. O mercado avalia a confiabilidade do processo utilizando métricas de qualidade de dados. Podemos modelar a qualidade (Q) da nossa massa de dados em função de registros validados:

$$ Q = 1 - \left( \frac{Registros_Inconsistentes}{Total_de_Registros} \right) $$

A etapa de testes foca em assegurar que $ Q \approx 1 $. Isso inclui:

- Testes de Unicidade: Garantir que a chave primaria do cliente nao se repete.
- Testes de Integridade: Garantir que todos os pedidos possuem um cliente valido associado.
  A operação refere-se a automação desse fluxo (agendamento das cargas), para que os paineis de visualização consumam dados sempre atualizados.

### 5. Visualização e Analise no Tableau Desktop

Com o pipeline ETL finalizado e os dados armazenados em um modelo tabular limpo, a camada de apresentação e construída no 'Tableau Desktop'. A criação de gráficos neste cenário foca em dimensões geográficas e de tempo, permitindo que os tomadores de decisão comparem o volume de vendas, faturamento e ticket médio por região. O desempenho do painel sera infinitamente superior devido ao trabalho prévio feito no Tableau Prep.

---

### Arquitetura do Processo (Fluxo ETL)

graph TD;
A[Fontes de Dados Dispersas] --> B(Extração: Tableau Prep);
B --> C{Limpeza e Transformação};
C --> D[MDM: Conceito Único de Cliente];
C --> E[MDM: Conceito Único de Pedido];
D --> F[Base Consolidada e Modelada];
E --> F;
F --> G(Testes de Qualidade e Operação);
G --> H[Tableau Desktop: Dashboards e Gráficos];
H --> I[Tomada de Decisão e Modelagem IA];

---

### Estudo de Caso: Carga Vendas por Regiao (Resolução Teorica)

- Contexto: Uma rede varejista possui dados em CSV para as regiões Norte e Sul, e um banco de dados SQL para Sudeste. Os formatos de data estão divergentes e ha clientes duplicados.
- Passo 1 (Extração): Conectar o 'Tableau Prep' aos arquivos CSV e ao banco SQL.
- Passo 2 (Transformação): Aplicar a operação 'Union' para empilhar os dados das tres regiões. Utilizar funções de parse de data para padronizar todos os registros no formato 'YYYY-MM-DD'.
- Passo 3 (Conceito Único): Usar a ferramenta de agrupamento (Grouping) do Tableau Prep baseada em similaridade (Fuzzy Match) ou no CPF do cliente para remover duplicatas, mantendo apenas o registro mais recente.
- Passo 4 (Operação e Visualização): Exportar a saída (Output) como um arquivo '.hyper' ou tabela de banco de dados. No 'Tableau Desktop', importar o arquivo '.hyper' e criar um mapa preenchido (Filled Map) destacando o total de vendas por estado.

---

### Insights / Conexao com IA/ML

A estruturação abordada nesta unidade e a espinha dorsal de qualquer projeto de Inteligencia Artificial. Modelos de Machine Learning sao altamente sensíveis a dados ruidosos ('Garbage In, Garbage Out').

- A criação do 'Conceito Único de Cliente' e o pre-requisito absoluto para desenvolver sistemas de recomendação, algoritmos de 'Churn Prediction' (previsão de cancelamento) e analise de 'Customer Lifetime Value' (CLV). Se o modelo identificar o mesmo cliente como duas pessoas distintas devido a falhas no ETL, as predições serão enviesadas.
- Ferramentas visuais como o Tableau Prep aceleram a etapa de 'Feature Engineering' (engenharia de atributos), permitindo que Cientistas e Engenheiros de Dados criem variáveis derivadas consolidadas (ex: total de compras por região nos últimos 30 dias) de maneira rápida antes de submete-las ao treinamento de algoritmos de ML.

---

[Previous](./03-power-bi.md) | [Next](./summary.md)
