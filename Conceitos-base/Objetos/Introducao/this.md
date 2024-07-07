# A palavra-chave this

A palavra-chave `this` no JavaScript é um elemento crucial para entender o funcionamento da linguagem, especialmente em relação ao escopo e contexto de execução do código. Ela **se refere ao objeto no qual o código está sendo executado atualmente**.

## Compreendendo o Comportamento do this:

O `this` é um **objeto de contexto** o valor da muda dinamicamente de acordo com o contexto em que é utilizado. Para desvendar seus mistérios, vamos analisar diferentes cenários:

### 1. Contexto Global:

Fora de qualquer função ou bloco de código, refere-se ao objeto global. No modo estrito do JavaScript, o objeto global é , enquanto no modo não estrito, ele é o objeto . `this` `undefined` `window`

#### Exemplo:

```
// Modo não estrito
console.log(this === window); // true

// Modo estrito
'use strict';
console.log(this === undefined); // true
```

### 2. Contexto de Função:

Dentro de uma função, refere-se ao objeto que a chamou. Ou seja, o valor de depender de como a função é invocada. `this` `this`

#### Exemplos:

```
// Função simples
function quemSouEu() {
  console.log(this); // Refere-se ao objeto global (modo não estrito) ou undefined (modo estrito)
}

quemSouEu(); // this é o objeto global ou undefined

// Função como método de objeto
const pessoa = {
  nome: "João",
  quemSouEu: function() {
    console.log(this); // this é o objeto pessoa
  }
};

pessoa.quemSouEu(); // this é o objeto pessoa

// Função anônima como callback
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // this é o elemento button
});

button.click(); // this é o elemento button
```

### 3. Arrow Functions

Em funções arrow (`=>`), o valor de `this` não é definido pela própria função, mas sim pelo contexto onde ela é declarada. Ou seja, a função arrow será o mesmo do escopo externo onde ela foi criada. `this` `this`

#### Exemplo:

```
const pessoa = {
  nome: "João",
  quemSouEu: () => {
    console.log(this); // this é o objeto pessoa
  }
};

pessoa.quemSouEu(); // this é o objeto pessoa
```

### 4. Chamada com `bind`, `call` e `apply`:

Ao utilizar os métodos `bind`, ou para chamar uma função, podemos definir explicitamente o valor de dentro da função. `call` `apply` `this`

#### Exemplo:

```
function quemSouEu(nome) {
  console.log(this.nome || nome); // this.nome se existir, senão usa o parâmetro nome
}

const pessoa = { nome: "João" };
const animal = { nome: "Rex" };

quemSouEu.call(pessoa); // this é o objeto pessoa (nome: João)
quemSouEu.apply(animal, ["Malu"]); // this é o objeto animal (nome: Rex), mas o parâmetro "Malu" é usado
```

#### Dicas para Dominar o this:

- **Lembre-se**: é dinâmico e depende do contexto. `this`
- **Em funções**: geralmente é o objeto que a chamou. `this`
- **Funções arrow**: segue o escopo externo. `this` `this`
- `bind`, `call` e `apply`: defina explicitamente o valor de `this`.
- **Prática**: Experimente diferentes cenários para solidificar o conhecimento.

#### [Objeto](../objetos.md)