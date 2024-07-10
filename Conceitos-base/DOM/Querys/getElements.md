# getElements

**getElements** é um método comumente usado em JavaScript para recuperar elementos do HTML Document Object Model (DOM). É uma função versátil que permite que você interaja e manipule elementos em uma página da web.

Veja aqui uma análise de como isso funciona:

- **`document` Objeto**: O ponto de partida para acessar o DOM é o `document` objeto. Este objeto representa todo o documento HTML carregado no navegador.
- **`getElements` Método**: O `document` objeto fornece vários métodos para selecionar elementos, e `getElements` é um deles. No entanto, é importante notar que não há um método embutido `getElements` diretamente no `document` objeto no JavaScript padrão.

Existem vários métodos comuns usados ​​para obter a seleção de elementos, cada um com sua própria sintaxe e finalidade:

## 1. `getElementById'('id')`:

  - Seleciona um elemento com um `id` atributo específico. O `id` atributo deve ser único dentro do documento.
  - Exemplo:

```
const element = document.getElementById("myElement");
```

## 2. `getElementsByTagName('tagName')`:

- Retorna uma coleção (uma HTMLCollection) de todos os elementos com uma correspondência `tagName` (por exemplo , "div", "p", "h1").
- Exemplo:

```
const paragraphs = document.getElementsByTagName("p");
```
## 3. `getElementsByClassName('tagClass')`

- Retorna um HTMLColection com todos os elementos da `class` selecionada.
- Exemplo?

```
const className = document.getElementsByClassName("className");
```

### [DOM](../dom.md)