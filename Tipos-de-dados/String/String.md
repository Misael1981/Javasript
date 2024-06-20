# String

## O que é uma String?

Uma String em JavaScript representa uma sequência de caracteres. Ela pode conter letras, números, símbolos e espaços em branco. As Strings são comumente utilizadas para armazenar e manipular texto

## Declaração de Strings:

As Strings em JavaScript são declaradas entre aspas duplas ou simples. Veja os exemplos:

```
let nome = "Fulano"; // Declaração com aspas duplas
let frase = 'Tudo bem?'; // Declaração com aspas simples
```

## Concatenação de Strings:

A concatenação de Strings junta duas ou mais Strings em uma única String. O operador de concatenação em JavaScript é o sinal de adição (+). Veja o exemplo:

```
let saudacao = "Olá, " + nome + "!";
console.log(saudacao); // Saída: Olá, Fulano!
```

## Acesso a Caracteres:

Para acessar um caractere específico de uma String, utilizamos os colchetes ( []) e o índice do caractere desejado. O índice começa em 0, ou seja, o primeiro caractere da String possui índice 0. Veja o exemplo:

```
let letra = nome[2]; // Acessando o terceiro caractere de nome
console.log(letra); // Saída: a (terceiro caractere de "Fulano" é "a")
```

## Comprimento de uma String:

O método `length` retorna o tamanho de uma String, ou seja, o número de caracteres que ela contém. Veja o exemplo:

```
let tamanho = nome.length;
console.log(tamanho); // Saída: 6 (nome possui 6 caracteres)
```

## Principais Métodos de Strings:

O JavaScript oferece diversos métodos para manipular Strings. Alguns dos mais utilizados são:

- `toUpperCase()`: Converte uma String para maiúscula.

- `toLowerCase()`: Converte uma String para minúsculas.

- `indexOf`(caracter): Retorna a posição da primeira ocorrência da substring dentro da String.

- `lastIndexOf`(substring): Retorna a posição da última ocorrência da substring dentro da String.

- `slice`(start, end): Extrai uma subString da String do índice inicial até o índice final (não incluído).

- `replace`(substring, replaceString): Substitui todas as ocorrências da substring por replaceString em String.

- `trim()`: Remover espaços em branco do início e do fim da String.

- `charAt`(indice): Retorna o caractere sem índice especificado.

- `charCodeAt`(indice): Retorna o código Unicode do caractere sem índice especificado.

- `split`(separator): Divide uma String em um array de Strings com base no separador especificado.





