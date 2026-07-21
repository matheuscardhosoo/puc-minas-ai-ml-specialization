# Python para Ciência de Dados

- [Unidade I: Fundamentos de Python](./01-fundamentals.md)
- [Unidade II: Vetorização](./02-vectors.md)
- [Unidade III: Manipulação de Dados](./03-data-manipulation.md)
- [Unidade IV: Visualização de Dados](./04-data-visualization.md)

## Referências Bibliográficas

### Bibliografia Básica

- Python 3.7.3 documentation disponível em https://docs.python.org/3/.
- Documentação sobre o Python disponível em https://www.w3schools.com/python/.

### Guia Rápido: Rodando Códigos em Python (Jupyter)

Para testar os conceitos na prática usando Jupyter Notebooks dentro do VS Code, siga este fluxo:

1. **Crie o Notebook:** Na mesma pasta das anotações (ex: `03-python-for-data-science`), crie um arquivo com a extensão `.ipynb` (ex: `01-fundamentals.ipynb`).
2. **Selecione o Kernel:** Abra o notebook recém-criado. No canto **superior direito** da janela do VS Code, clique no botão **Select Kernel** (Selecionar Kernel).
3. **Conecte o Ambiente:** Escolha a opção **Python Environments** e selecione o ambiente virtual configurado para este repositório (`puc-ds`).

_Dica: O ambiente VS Code está configurado com o linter/formatador **Ruff**. Basta salvar o arquivo (`Cmd + S`) para que o código seja formatado e os imports organizados automaticamente._

### ⚙️ Como Recriar o Ambiente (Setup do zero em outro Mac)

Caso precise configurar este repositório em um novo computador (macOS), certifique-se de já ter instalado o **Anaconda** e o **VS Code**. Em seguida, siga os passos abaixo:

#### 1. Preparação do Terminal (Anaconda)

Se o comando `conda` não for reconhecido pelo terminal padrão do Mac (ZSH), ative-o manualmente e configure a inicialização:

```bash
source ~/opt/anaconda3/bin/activate # (ou ~/anaconda3/bin/activate dependendo da instalação)
conda init zsh
```

Atenção: Feche o terminal e abra um novo após rodar esses comandos.

#### 2. Criação do Ambiente Virtual

Crie o ambiente isolado para o projeto contendo o Python 3.12 e os pacotes básicos de Ciência de Dados:

```bash
conda create -n puc-ds python=3.12 jupyter pandas numpy -y
```

#### 3. Configurações do VS Code

Para garantir que o código fique sempre formatado corretamente e os notebooks rodem sem problemas:

- Extensões: Instale as extensões Python (Microsoft), Jupyter (Microsoft) e Ruff (Astral Software).
- Auto-formatação e Linting: Pressione Cmd + Shift + P, digite Open Settings (JSON) e adicione o bloco abaixo dentro das chaves {}:

```json
{
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true
  },
  "notebook.formatOnSave.enabled": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.ruff": "explicit",
    "source.fixAll.ruff": "explicit"
  }
}
```

Com isso no seu `summary.md` ou em um `README.md` principal, você ou qualquer colega que for colaborar no seu repositório consegue replicar o seu ambiente em poucos minutos!

---

[Previous](../02-general-statistics-theory-and-applications/summary.md) | [Next](../04-data-preparation-and-integration/summary.md)
