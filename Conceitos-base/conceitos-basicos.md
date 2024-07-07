# Conceitos Básicos do JavaScript

O JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos, amplamente utilizada para adicionar interatividade e funcionalidade a páginas da web.

## 1. Variáveis:

- Armazene dados que podem ser utilizados no código.
- São declaradas usando a palavra-chave `var`,`let` ou `const`, seguida do nome da variável e do valor a ser armazenado. 
Ex- : `let nome = "Fulano"`;

## 2. Tipos de Dados:

- JavaScript possui diversos tipos de dados, como:
  - `number`: Números inteiros e decimais.
  - `string`: Textos entre aspas simples ou duplas.
  - `boolean`: Valores trueou false.
  - `array`: Listas de valores ordenados.
  - `object`: Coleções de dados chave-valor.

## 3. Operadores:

- Realizam operações matemáticas, lógicas e de comparação entre dados.
- Ex: adição (`+`), subtração (`-`), multiplicação (`*`), divisão (`/`), igualdade (`==`), diferente (`!=`).

## 4. Estruturas de Controle:

- Controlam o fluxo de execução do código.
Ex:
  - `if`: Executar um bloco de código é uma declaração verdadeira.
  - `switch`: Executa um bloco de código específico com base em um valor.
  - `for`: Repita um bloco de código um número determinado de vezes.
  - `while`: Repita um bloco de código enquanto uma declaração é verdadeira.

## 5. Funções:

- Blocos de código reutilizáveis ​​que suportam uma tarefa específica.
- São declaradas usando a palavra-chave `function`, seguida do nome da função, parâmetros entre parenteses e o bloco de código entre chaves.
- Ex: `function somar(x, y) { return x + y; }`

## 6. Manipulação do DOM:

- Permite interagir com os elementos HTML de uma página da web.
Usado para:
  - Alterar o conteúdo dos elementos.
  - Esconder ou mostrar elementos.
  - Adicionar ou remover elementos.
  - Responder a eventos do usuário, como cliques e digitação.

## 7. Escopo de Variáveis:

- Defina a visibilidade de uma variável dentro do código.
- Existem três tipos de escopo:
  - **Global**: Acessível em qualquer lugar do código.
  - **Local**: Acessível apenas dentro do bloco de código em que foi declarado.
  - **Função**: Acessível apenas dentro da função em que foi declarada.

## 8. Assíncrona:

- O JavaScript possui recursos para lidar com código assíncrono, o que permite executar tarefas sem bloquear a interface do usuário.
- Usado para:
  - Fazer requisições HTTP para buscar dados de servidores.
  - Manipular animações e efeitos visuais.
  - Executar tarefas em segundo plano sem congelar a tela.

#### [Variáveis](../Conceitos-base/variaveis/variaveis.md)

#### [Tipos de dados](../Conceitos-base/Tipos-de-dados/tipos-de-dados.md)

#### [Controle de fluxo](../Conceitos-base/controle-de-fluxo/controle-fluxo.md)

#### [Tamplete String](../Conceitos-base/definição/Tamplate-String/TamplateString.md)

#### [Operadores](../Conceitos-base/operadores/operadores.md)

#### [Funções](../Conceitos-base/Funções/functions.md)

#### [Objetos](../Conceitos-base/Objetos/objetos.md)