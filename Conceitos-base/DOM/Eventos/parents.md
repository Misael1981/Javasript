# parents

O termo "parents" se refere aos elementos pais de um determinado elemento dentro da árvore da estrutura do documento HTML. Em outras palavras, são os elementos que estão diretamente acima do elemento em questão na hierarquia da árvore.

Para entender melhor, imagine a estrutura HTML de um site como uma árvore invertida, com a raiz no topo e os elementos se ramificando para baixo. Cada elemento é um nó na árvore e possui, em geral, um ou mais elementos pais.

### Exemplo:

Considere o seguinte código HTML:

```
<div id="meuElemento">
  `<p>` Este é um parágrafo.</p>
  <img src="imagem.jpg" alt="Uma imagem">
</div>
```

### Neste exemplo:

- O elemento `<div>` com id "meuElemento" é o pai dos elementos `<p>` e <img>.
- O elemento `<p>` não possui elementos pai dentro do elemento `<div>`.
- O elemento `<img>` também não possui elementos pai dentro do elemento `<div>`.

Caso necessário, para selecionar todos os elementos filhos, dentro da tag `<div>`, para adicionar uma class CSS em cada um desses elementos: 

```
const meuElemento = document.querySelector('.meuElemento)

console.log(meuElemento.children)
```

- O retorno seria um HTMLCollection contendo 2 elementos:

```
HTMLCollections(2) [p, img]
```

- **`children`: retorna um ativo `HTMLCollection` que contém todos os filhos `elements` do elemento pai no qual foi chamado.**

- Para converter o **HTMLColletion** em um array, e assim poder utilizar os métodos de array como o `forEach`por exemplo, podemos passar o **HTMLCollection** como argumento do método `from` da função construtora `Array()`:

```
console.log(Array.from(meuElemento.children))
```

- O retorno será um array com 2 elementos.

- Agora, para adicionar uma class CSS para cada elementoo filho, podemos utilizar o método `forEach`:

```
Array.from(meuElemento.children).forEach((element) => {
    element.classList.add('elemento-filho')
})
```

## Outras relações:

- `parentElement`:
   - Pertence ao objeto `Element`do DOM.
   - É uma propriedade somente leitura que retorna o elemento pai imediato do elemento selecionado.
   - Se o elemento for o primeiro filho de seu pai (ou seja, não tem irmãos anteriores), retornará . `parentElement` `null`

- `previousElementSibling`:
   - Também pertence ao objeto `Element` do DOM.
   - É uma propriedade somente leitura que retorna o elemento irmão imediatamente anterior ao elemento selecionado na lista de filhos do mesmo pai. 
   - Se o elemento for o primeiro filho do seu pai, retornará . `previousElementSibling` `null`

- `nextElementSibling` :

   - Novamente, faz parte do objeto `Element`do DOM.
   - É uma propriedade somente leitura que retorna o elemento irmão imediatamente posterior ao elemento selecionado na lista de filhos do mesmo pai.
   - Se o elemento for o último filho de seu pai, retornará . `nextElementSibling` `null`

### Resumo:

Essas propriedades ajudam você a migrar pela estrutura da árvore DOM e localizar elementos relacionados a um elemento separado.

- `parentElement`: Sob um nível na hierarquia para encontrar o elemento pai.
- `previousElementSibling`: Procure o elemento irmão anterior na lista de filhos do mesmo pai.
- `nextElementSibling`: Procure o elemento irmão posterior na lista de filhos do mesmo pai.



### Aplicações:

O conceito de "pais" no DOM é fundamental para diversas tarefas de manipulação de páginas HTML, como:

- `Acessar e modificar atributos e propriedades dos elementos pai`: Você pode usar JavaScript para acessar e modificar atributos e propriedades dos elementos pai de um determinado elemento.
- **Estilizar elementos com base em seus pais**: É possível aplicar estilos CSS a elementos de forma específica, dependendo de sua posição na hierarquia da árvore DOM. Por exemplo, você pode estilizar todos os parágrafos que são filhos de um determinado elemento `<div>`.
- **Navegar pela estrutura do documento**: Você pode usar métodos JavaScript como parentNodee parentElementpara navegar pela árvore DOM e encontrar os elementos pai de um determinado elemento.
- **Posicionar elementos dinamicamente**: É possível posicionar elementos dinamicamente na página HTML com base na sua relação com os elementos pai.

### [DOM](../dom.md)