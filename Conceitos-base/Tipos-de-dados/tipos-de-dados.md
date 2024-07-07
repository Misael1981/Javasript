# Tipos de dados em JavaScript

## O JavaScript possui dois tipos principais de dados:

### 1. Tipos Primitivos:

- **Number**: Representa números inteiros e decimais (ex: 1, 3. 14, -100).

- **String**: Representa sequências de caracteres (ex: "Olá", "mundo! ", "123").

- **Booleano**: Representa valores lógicos (verdadeiro ou falso).

- **Undefinid**: Indica que uma variável não possui valor definido.

- **Null**: Indica que uma variável foi intencionalmente definida como vazia.

- **Simbol**: Um tipo primitivo especial para identificar valores únicos.

- **BigInt**: Um tipo para representar números inteiros maiores que o limite do tipo Number.

### 2. Tipos de Referência:

- **Objetos**: O tipo de referência mais comum. Variáveis ​​​​que referenciam objetos armazenam a localização na memória onde o objeto reside. Isso significa que **modificar o objeto através de uma variável** afeta o objeto original em todos os lugares do código onde ele é referenciado.
- **Arrays**: Arrays também são tipos de referência. Eles armazenam referências aos elementos do array na memória. Alterar um elemento do array através de uma variável **modifica o array original** em qualquer lugar do código onde ele é referenciado.
- **Funções**: As funções também são tipos de referência. Variáveis ​​​​que referenciam funções armazenam a localização na memória da função. Isso permite que você passe funções como argumentos para outras funções e crie closures.

#### [Menu conceitos básicos](../conceitos-basicos.md)

- [Numbers](../Tipos-de-dados/Numbers/Numbers.md)

- [String](../Tipos-de-dados/String/String.md)

- [Booleans](../Tipos-de-dados/Boolean/Boolean.md)

- [Null e Undefined](../Tipos-de-dados/NullUndefined/NullUndefined.md)

- [Arrays](../Tipos-de-dados/Arrays/Arrays.md)