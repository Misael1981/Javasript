# `event delegation`

Event Delegation é um padrão baseado no conceito de Event Bubbling . É um padrão de manipulação de eventos que permite que você manipule eventos em um nível mais alto na árvore DOM diferente do nível onde o evento foi recebido pela primeira vez.

## Como funciona o `event delegation`?

Com o `event delegation` em vez de manipular o evento de clique no `button`, você pode manipulá-lo no `div`.

A ideia é que você " **delegue** " o tratamento de um evento para um elemento diferente (nesse caso, a `div`, que é um elemento pai) em vez do elemento real (o botão) que recebeu o evento.

Aqui está o que quero dizer com isso no código:

```
const div = document.getElementsByTagName("div")[0]

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log("button was clicked")
  }
})
```

O `event` objeto tem uma `target` propriedade que contém informações sobre o elemento que realmente recebeu o evento. Em `target.tagName`, obtemos o nome da tag para o elemento e verificamos se é **BUTTON** .

Com esse código, quando você clica em `button`, o evento aparece no `div` que manipula o evento.

## Benefícios da delegação de eventos

`event delegation` é um padrão útil que permite escrever código mais limpo e criar menos ouvintes de eventos com lógica semelhante.

O que quero dizer com isso? Olhe para este código:

```
<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

Aqui temos 3 botões. Digamos que queremos manipular um evento de clique em cada botão, de modo que, quando ele for clicado, o texto do botão seja registrado no console. Podemos implementar isso assim:

```
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText)
  })
})
```

Estou usando `querySelectorAll` aqui porque ele retorna um para `NodeList` o qual posso usar o `forEach` método. `getElementsByTagName` Retorna um `HTMLCollection` que não tem o método `forEach`.

Quando você clica no primeiro botão, você tem o "Botão 1" registrado no console. Para o segundo botão, o "Botão 2" é registrado, e para o terceiro botão, o "Botão 3" é registrado.

Embora isso funcione como queremos, criamos três ouvintes de eventos para os três botões.

Como o evento de clique nesses botões se propaga para cima na árvore DOM, podemos usar um pai ou ancestral comum que eles têm para manipular o evento. Nesse caso, delegamos um pai comum que eles compartilham para manipular a lógica que queremos.

Veja como:

```
const div = document.querySelector('div')

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText)
  }
})
```

Agora, temos apenas um ouvinte de eventos, mas a lógica é a mesma: quando você clica no primeiro botão, o "Botão 1" é registrado no console, e o mesmo acontece com os outros botões.

Mesmo se adicionarmos um botão extra como este:

```
<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
</div>
```

Não precisaremos alterar o código JavaScript, pois esse novo botão também compartilha o divpai (que delegamos para o tratamento de eventos) com os outros botões.

### Empacotando

Com a `event delegation`, você cria menos ouvintes de eventos e executa lógica baseada em eventos semelhantes em um só lugar. Isso facilita a adição e remoção de elementos sem precisar adicionar novos ou remover ouvintes de eventos existentes.

A `event delegation` é possível por causa da propagação de eventos no DOM, onde o evento que um elemento filho recebe também é passado para o pai e os ancestrais do filho. Novamente, você pode ler mais sobre o bubbling de eventos aqui .

### Referencia:

### [Artigo de Dillion Megida, para a freeCodeCamp](https://www.freecodecamp.org/news/event-delegation-javascript/)

### [Voltar ao menu do DOM](../dom.md)