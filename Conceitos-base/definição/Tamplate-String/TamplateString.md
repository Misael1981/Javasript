# Tamplate String

Recurso poderoso introduzido no JavaScript (ES6) para criar strings. Eles oferecem diversas vantagens sobre a concatenação tradicional de strings usando aspas simples ou duplas.

## 1. Definição e Uso

As **Tamplate Strings** são colocadas entre crases ( ) em vez de aspas simples ou duplas. Eles permitem incorporar expressões diretamente na string usando `${expression}` sintaxe. Isso elimina a necessidade de concatenação complexa de strings usando o operador de adição (+).

Exemplo:

```
const name = "Alice";
const greeting = "Hello, " + name + "!";  // Traditional concatenation

const greetingTemplate = `Hello, ${name}!`;  // Template literal
```

## 2. Strings multilinhas

As strings de modelo podem abranger várias linhas sem a necessidade de caracteres de escape ou concatenação. Isso torna a escrita de strings longas muito mais legível e fácil de manter.

Exemplo:

```
const message = `This is a multi-line string.
It can span across multiple lines
without any special characters.`;
```

## 3. Interpolação de strings

A principal vantagem das strings de modelo é a capacidade de incorporar expressões diretamente na string usando ${expression}. Isso permite criar strings dinamicamente com base em variáveis ​​ou chamadas de função.

Exemplo:

```
const age = 30;
const bio = `My name is ${name} and I am ${age} years old.`;
```

## 4. Literais de modelo marcados

Um recurso menos comum, mas poderoso, são os literais de modelo marcados. Isso permite que você chame uma função (a função tag) antes do backtick de abertura. A função tag recebe uma matriz de literais de string e expressões incorporadas como argumentos, permitindo a manipulação avançada de strings.

Exemplo (simplificado):

```
function formatPrice(strings, value) {
  return `$${value.toFixed(2)}`;
}

const price = 12.50;
const formattedPrice = formatPrice`The price is: ${price}`;  // formattedPrice = "The price is: $12.50"

```