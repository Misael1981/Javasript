# NodeList e HTMLCollection

**NodeList e HTMLCollection** são duas interfaces que representam coleções de elementos no DOM (Document Object Model), a estrutura que representa o conteúdo de uma página HTML. Ambas permitem que você acesse e manipule elementos na página, mas possuem características e funcionalidades distintas.

## NodeList:

- É uma coleção **viva e dinâmica** de nós no DOM. Isso significa que sua lista é atualizada automaticamente quando há alterações na estrutura da página, como adição ou remoção de elementos.
- Contém **todos os tipos de nós** , incluindo elementos HTML, comentários, nós de texto e outros tipos de nós DOM.
- É frequentemente retornado por métodos DOM como `childNodes`, e . `querySelectorAll` `getElementsByTagName`
- Exemplos de uso:
  - Acesse e modifique os filhos de um elemento:

```
const parentNode = document.getElementById("myParent");
const childNodes = parentNode.childNodes;

childNodes[0].textContent = "Novo texto para o primeiro filho";
```

  - Iterar sobre todos os elementos em um container:

```
const elements = document.querySelectorAll(".my-class");

for (const element of elements) {
  console.log(element.textContent);
}
```

## HTMLCollection

- É uma coleção estática de elementos HTML. Isso significa que a lista não é atualizada automaticamente quando há alterações na estrutura da página.
- Contém apenas elementos HTML , como `div`, `p`, `h1`, `img` etc
- É retornado por métodos DOM específicos para elementos HTML, como `getElementsByTagName` e `getElementsByClassName`.
- Exemplos de uso:
  - Obter uma coleção de elementos HTML com um nome de tag específico:

```
const paragraphs = document.getElementsByTagName("p");

for (const paragraph of paragraphs) {
  paragraph.style.color = "red";
}

```

  - Acesse um elemento HTML por ID ou nome (se único):

```
const elementById = document.getElementById("myUniqueElement");
const elementByName = document.getElementsByName("myInput")[0]; // Primeiro elemento com o nome "myInput"

if (elementById) {
  elementById.style.display = "none";
}

if (elementByName) {
  elementByName.value = "Novo valor";
}
```

| Caracteristica | NodeList        |  HTMLCollection |
|----------------|-----------------|-----------------|
|Tipo de coleção |Viva, dinâmica | Estática |
| Conteúdo |Todos os tipos de nós DOM | Apenas elementos HTML |
|Métodos de criação |childNodes, querySelectorAll| getElementsByTagName, getElementsByClassName |
| Uso comum | Acesse e modifique qualquer tipo de nó na estrutura da página | Acessar e manipular elementos HTML específicos |

### Em resumo:

- Use `NodeList` quando precisar de acesso dinâmico e completo à estrutura do DOM, incluindo todos os tipos de nós.
- Use `HTMLCollection` quando precisar trabalhar apenas com elementos HTML e se beneficie da natureza estática da coleção.

### [DOM](../dom.md)