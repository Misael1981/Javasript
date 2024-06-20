# Operadores de Comparação

Operadores de comparação são usados ​​para comparar valores e verificar se uma condição é verdadeira ou falsa. Eles retornam um valor booleano ( `true` ou `false`).

Os principais operadores de comparação em JavaScript são:

- `==`(igualdade): verifica se dois valores são iguais.
- `!=`(diferença): verifica se dois valores são diferentes.
- `<`(menor que): verifica se um valor é menor que outro.
- `<=`(menor que ou igual): verifica se um valor é menor que ou igual a outro.
- `>`(maior que): verifica se um valor é maior que outro.
- `>=`(maior que ou igual): verifica se um valor é maior que ou igual a outro.

Exemplo:

```
const num1 = 10;
const num2 = 15;
const num3 = '10';

console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 > num2); // false
console.log(num1 >= num2); // false
console.log(num1 === num3); // false (comparação estrita)
console.log(num1 !== num3); // true
```

Neste exemplo, as variáveis `num1` ​​e `num2` armazenam números inteiros. Os operadores de comparação são usados ​​para comparar os valores das variáveis ​​e imprimir o resultado no console. **Os valores de retorno serão sempre `true` ou `false`.**


## Conversão de Tipo

A conversão de tipo é o processo de converter um valor de um tipo de dado para outro. No JavaScript, uma conversão de tipo pode ser implícita ou explícita.

## Conversão Implícita:

A conversão implícita é realizada automaticamente pelo JavaScript em determinadas situações. Por exemplo, se você comparar um número com uma string, o JavaScript converterá uma string para um número antes de realizar uma comparação.

Exemplo:

```
const num = 10;
const str = "10";

console.log(num == str); // true
```

Neste exemplo, o JavaScript converte implicitamente uma string "10" para o número 10 antes de realizar a comparação, resultando em `true`.

## Convesão Explícita:

A conversão explícita é realizada manualmente pelo programador usando funções de conversão de tipo. As funções de conversão de tipo mais comuns em JavaScript são:

- `Boolean()`: converte um valor para um valor booleano.
- `Number()`: converte um valor para um número.
- `String()`: converte um valor para uma string.

Quando qualquer um desses valores é convertido para boolean, eles resultam em `false`.

```
Valores falsy

- false
- 0
- "", '', ``
- null
- undefined
- NaN
```

**Valores Truthy**: Qualquer valor que não é `falsy`

Exemplo:

```
const numStr = "20";
const num = Number(numStr);

console.log(typeof numStr); // string
console.log(typeof num); // number
```

Neste exemplo, a função `Number()` é usada para converter a string "20" para o número 20. A instrução `typeof` é usada para verificar o tipo de dado das variáveis, mostrando que `numStr` é uma string e `num` é um número.

## Verificação do tipo de dado 

- `typeof` Verifica o tipo de dado.

```
let name = Paul;

console.log(typeof name); // string
```