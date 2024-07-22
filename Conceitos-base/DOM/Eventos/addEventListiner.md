# `addEventListener`: O Mestre da Interatividade na Web

`addEventListener` um método crucial no JavaScript, permitindo que você conecte elementos HTML a ações e torne suas páginas web dinâmicas e interativas. Imagine um maestro regendo uma orquestra: o `addEventListener` é como o maestro, coordenando os eventos (instrumentos) e as funções de manipulação do DOM (músicos) para criar uma sinfonia de interatividade.

## Funcionalidade:

- **Atribuições de ouvintes de eventos**: Imagine um elemento HTML como um instrumento musical. Isso `addEventListener` permite que você atribua "ouvintes" a esse instrumento, prontos para atuar em eventos específicos (como cliques, pressionamentos de teclas ou mudanças de valor), como se fossem notas musicais.
- **Conectar eventos a funções**: Ao definir um ouvinte de evento, você especifica uma função JavaScript que será executada quando o evento ocorrer. Essa função é como o maestro conduzindo a orquestra, respondendo ao evento e manipulando o DOM de acordo com suas instruções.
- **Gerenciamento de múltiplos ouvintes**: Um elemento pode ter vários ouvintes para o mesmo evento, permitindo diferentes ações em resposta à mesma "nota musical". É como ter vários instrumentos tocando em harmonia, cada um contribuindo para a melodia geral.
- **Opções de configuração**: O `addEventListener` oferece opções para personalizar a forma como os eventos são ouvidos, como captura ou propagação de eventos, e bolhas de eventos. Isso permite um controle mais preciso sobre a orquestra da interatividade.

## Eventos Escutados:

Ele `addEventListener` pode lidar com uma ampla variedade de eventos, abrangendo desde interações do usuário até mudanças no DOM. Alguns exemplos comuns incluem:

- **Eventos de clique**: Acionar funções quando um elemento é clicado com o mouse.
- **Eventos de mouse**: Rastrear movimentos do mouse, como pairar, entrada e saída de elementos.
- **Eventos de teclado**: Detectar pressões e solturas de teclas, permitindo atalhos e navegação por teclado.
- **Eventos de formulário**: Manipule dados de formulários quando submetidos ou quando os campos são modificados.
- **Eventos de janela**: Responder a eventos de janela do navegador, como redimensionamento ou rolagem.
- **Eventos DOM**: Monitore alterações no DOM, como adição ou remoção de elementos.

```
const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
  alert("Você clicou no botão!");
});
```

Neste exemplo, o código escuta o evento "click" no elemento com `id="meuBotao"`. Quando o botão for clicado, a função anônima será executada, exibindo um alerta com a mensagem "Você clicou no botão!".

## Entendendo eventos e manipuladores de eventos (event handlers)

**Eventos** são ações que acontecem quando o usuário ou o navegador manipula uma página. Eles desempenham um papel importante, pois podem fazer com que elementos de uma página da web mudem dinamicamente.

Quando o navegador, por exemplo, termina de carregar um documento, ocorreu um evento `load`. Se um usuário clicar em um botão em uma página, um evento `click` terá acontecido.

Muitos eventos podem acontecer uma vez, várias vezes, ou nunca. Você também pode não saber quando um evento vai acontecer, especialmente se ele for gerado pelo usuário.

Nesses cenários, você precisa de um  `manipulador de evento` (em inglês, event handler) para detectar quando um evento acontece. Desse modo, você pode criar um código para reagir aos eventos à medida que eles acontecem.

O JavaScript fornece um manipulador de evento (event handler) na forma do método addEventListener(). Este handler pode ser anexado ao elemento HTML específico para o qual você deseja monitorar eventos. Cada elemento pode ter mais de um handler anexado.

## Sintaxe de `addEventListener()`

```
target.addEventListener(event, function, useCapture)
```

- `target`: o elemento HTML ao qual você deseja adicionar seu manipulador de eventos (event handler). Este elemento existe como parte do Document Object Model (DOM). Aprenda como selecionar um elemento DOM (texto e curso em inglês).
- `event`: uma string que especifica o nome do evento. Já mencionamos eventos de `load` e `click`. Para os curiosos, aqui está uma lista completa de [eventos do DOM do HTML](https://www.w3schools.com/jsref/dom_obj_event.asp) (em inglês).
- `function`: especifica a função a ser executada quando o evento for detectado. Esta é a magia que pode permitir que as suas páginas web mudem dinamicamente.
- `useCapture`: um valor booleano opcional (verdadeiro ou falso) que especifica se o evento deve ser executado na fase de captura ou de envio aos eventos pais. No caso de elementos HTML aninhados (como um img dentro de um div) com manipuladores de eventos anexados, este valor determina qual evento é executado primeiro. Por padrão, ele é definido como falso, o que significa que o manipulador de eventos do elemento HTML mais interno é executado primeiro (fase de envio).

## Exemplo de código do `addEventListener()`

```
const lis = document.querySelector('li')

lis.forEach(li => {
  li.addEventListener('click', () => {
    const elementoClicado = event.target

    elementoClicado.style.textDecoration = 'line-through'
  })
})
```

### Conclusão:

Ela `addEventListener` é uma ferramenta poderosa para tornar suas páginas HTML interativas e dinâmicas. Com ele, você pode criar interfaces responsivas e experiências de usuário personalizadas, conectando eventos a ações e manipulando o DOM com maestria. Explore o potencial `addEventListener`e torne seus sites verdadeiras sinfonias de interatividade!

### [Voltar ao menu do DOM](../dom.md)