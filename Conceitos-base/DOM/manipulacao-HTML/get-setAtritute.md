## `setAttribute` e `getAttribute`

São métodos usados ​​em JavaScript para manipular atributos de elementos HTML. São como chaves que armazenam informações extras sobre o elemento, como o tipo de entrada, o valor de um link ou a classe CSS. 

- **getAttribute(attributeName)**: Retorna o valor do atributo especificado pelo nome. Se o atributo não existir, retorna null.

- **setAttribute(attributeName, attributeValue)**: Define o valor do atributo especificado pelo nome. Se o atributo já existir, o valor é atualizado. Se não existir, um novo atributo é criado.

### Exemplo:

```
const element = document.getElementById("myElement");

// Obtém o valor do atributo "href"
const href = element.getAttribute("href");
console.log(href); // Imprime o valor do link

// Define o valor do atributo "title"
element.setAttribute("title", "Novo título");

// Obtém o novo valor do atributo "title"
const newTitle = element.getAttribute("title");
console.log(newTitle); // Imprime "Novo título"
```

### Quando usar cada um?

- Use `getAttribute` para ler o valor de um atributo existente.
- Use `setAttribute` para criar ou atualizar o valor de um atributo.

### [DOM](../dom.md)