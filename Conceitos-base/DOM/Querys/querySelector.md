# QuerySelector

Um método que serve como uma ferramenta poderosa para selecionar elementos dentro de um documento HTML. Ele reside dentro do objeto, permitindo que você direcione elementos específicos com base em seletores CSS. `querySelector` `document`

Veja aqui uma análise de como `querySelector`funciona:

## 1. Seletor Mágico:

Você fornece um seletor CSS como argumento para `querySelector`. Este seletor age como uma instrução precisa, apontando o elemento exato com o qual você quer interagir. Exemplos comuns de seletores incluem:

- Seletor de tipo (por exemplo, ) `querySelector('div')`
  - Retorna uma referência a **primeira** tag encontrada.
- Nomes de classes (por exemplo , ) `querySelector('.myClass')`
  - Utliza-se o seletor do CSS (`.`), para indicar que está se referenciando uma `class`.
- IDs (por exemplo , ) `querySelector('#uniqueId')`
Combinações mais complexas (por exemplo , ) `querySelector('ul li.special')`

## 2. Encontrando o Escolhido:

`querySelector`pesquisa meticulosamente todo o documento HTML, começando pelo elemento no qual é chamado (geralmente o `document` próprio objeto). Ele atravessa a árvore DOM, examinando cada elemento em relação ao seletor fornecido.

## 3. O Grande Retorno:

Se `querySelector`localizar com sucesso um elemento correspondente, ele triunfantemente retorna esse elemento como uma referência. Essa referência atua como um handle, permitindo que você interaja com as propriedades, estilos e conteúdo do elemento usando JavaScript.

## 4. Quando nada é encontrado:

Se nenhum elemento corresponder ao seletor,`querySelector` retorna um valor especial chamado `null`. Isso indica que sua pesquisa não produziu resultados. É essencial lidar com esse cenário graciosamente em seu código para evitar erros. 

**Em essência, `querySelector` é como um cão de caça de elementos HTML, farejando exatamente o que você precisa com base em um seletor CSS.**

Aqui está um exemplo para ilustrar seu uso:

```
const buttonElement = document.querySelector('button.primary');

if (buttonElement) {
  buttonElement.addEventListener('click', () => {
    alert('Button clicked!');
  });
} else {
  console.warn('No button with class "primary" found!');
}
```

# querySelectorAll

Retorna todos os seletores selecionados.

```
const theDivs = document.querySelectorAll('div')

NodeList(3) [div, div, div]  // Retorna todas as DIVs encontradas
```

### [DOM](../dom.md)