# Null e Undefined

**null e undefined** , dois termos que podem gerar dúvidas frequentes em programadores JavaScript, especialmente para iniciantes. Mas não se preocupe, desvendaremos seus segredos agora mesmo!

## O que é Undefined?

Imagine uma variável que você declarou, mas nunca atribuiu um valor a ela. É como uma caixa vazia, sem nada dentro. Essa variável terá o valor undefined .

Exemplo:

```
let variavelSemValor;
console.log(variavelSemValor); // undefined
```

## O que é Null?

Diferente de undefined, null é um valor atribuído intencionalmente a uma variável. Significa que a variável está vazia, mas por escolha do programador. 

Exemplo:

```
let variavelComNull = null;
console.log(variavelComNull); // null
```

| Característica |Undefined | Null |
|--------------|------------|-------|
| Origem      | Variável sem valor definido    | Atribuição intencional |
| Significado| Caixa vazia   | Vazio por escolha |
| Tipo     | typeof retorna "indefinido"    | typeof retorna "objeto" |
|Comparação| `variavelSemValor === undefined` true| `variavelComNull === null` true |
| Estrito | `variavelSemValor === null` false   | `variavelComNull == undefined` true (coerção implícita) |


## Quando usar cada um?

- **undefined**: Geralmente para variáveis ​​que ainda não receberam um valor ou que foram declaradas para serem indicadas.
- **null**: Para indicar que uma variável foi propositalmente esvaziada, como após remover um objeto ou finalizar uma operação.

## Dicas Extras:

- Evite usar null em comparações estritas: pode gerar bugs inesperados. Use com cautela e cuidado com a coerção implícita. `variavel === nullvariavel == null`

- **null e undefined** são valores falsos em testes lógicos: será falso, pois é considerado falso. `if (variavelSemValor) { ... }undefined`