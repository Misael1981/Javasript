# Adicionando e removendo itens com `eventListener`

## Cenário:

Imagine uma lista de compras HTML com `<li>`s representando os itens a serem comprados. Usaremos  `addEventListener` para adicionar e remover itens dinamicamente, tornando sua lista interativa e atualizada.

### Estrutura HTML:

```
<ul id="minhaLista">
  <li>Leite</li>
  <li>Ovos</li>
  <li>Pão</li>
</ul>
<button id="button">Clique aqui</button>
```
## Passo 1: Adicionando Elementos `<li>`

### 1. Criando template com `innerHTML`:

```
const minhaLista = document.querySelector('#minhaLista')
const button = document.querySelector('#button')

button.addEventListener('click', () => {
    minhaLista.innerHTML += `<li>Novo Item</li>`
})
```

- A cada clique no botão um "Novo Item" será adicionado;

### 2. Utilizando o  `createElement`:

```
const minhaLista = document.querySelector('#minhaLista')
const button = document.querySelector('#button')

button.addEventListener('click', () => {
   const novoItem = document.createElement(`li`)
   novoItem.textContent = 'Novo item'
   minhaLista.append(li)
})
```

- `createElement`: é um método do `document` que cria um novo elemento HTML, passando como argumento o nome da tag a ser criada
- `append`: função que nos permite adicionar elementos ao HTML de forma dinâmica. Com esse método, podemos manipular o conteúdo do nosso documento, seja para adicionar novos elementos, como elementos de texto, imagens, links, ou modificar elementos já existentes. Irá adicionar um novo valor no fim do conjunto de valores.
- `prepend`: Adiciona um novo valor no **início** do conjunto de valores


## Passo 2: Removendo Elementos `<li>`

### 1. Criando a função para remover:

```
function removerItem() {
  const lista = document.getElementById("minhaLista");
  const ultimoItem = lista.lastChild;
  if (ultimoItem) {
    lista.removeChild(ultimoItem);
  } else {
    alert("A lista está vazia!");
  }
}

```
- A função `removerItem` obtém a referência para a lista.
`lastChild` recupera o último elemento da lista.
- Se o último item existir (`lastChild`), ele é removido com `removeChild`.
- Caso contrário, um alerta informa que a lista está vazia.

## 2. Conectando o clique ao `addEventListener`:

```
const botaoRemover = document.getElementById("removerItem");
botaoRemover.addEventListener("click", removerItem);
```
- Selecionamos o botão "Remover Item".
- Usamos `addEventListener` para escutar o evento "click" no botão.
- Quando o botão for clicado, a função `removerItem` será executada.

### [Voltar ao menu-DOM](../dom.md)