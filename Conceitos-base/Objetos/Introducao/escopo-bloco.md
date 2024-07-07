# Variáveis, Escopo e Bloco de Código

## Variáveis:

Em JavaScript, as variáveis ​​são utilizadas para armazenar dados que podem ser utilizados posteriormente no código. Elas são declaradas utilizando as palavras-chave `var`, `let` ou `const`, seguidas do nome da variável e de um operador de atribuição (`=`) e do valor inicial (opcional). 

## Tipos de variáveis:

- `var`: possui escopo de função ou global. Ou seja, a variável pode ser acessada em qualquer lugar dentro da função onde foi declarada ou no escopo global do programa. É a forma mais antiga de declarar variáveis ​​em JavaScript e ainda é suportada, mas o uso de `let` e `const` é recomendado em novos projetos.
- `let`: Possui escopo de bloco. Ou seja, a variável só pode ser acessada dentro do bloco de código onde foi declarada. Isso inclui loops, instruções `if` e outras estruturas de controle.
- `const`: Possui escopo de bloco e seu valor não pode ser alterado após a inicialização. É usado para declarações constantes, ou seja, valores que não devem ser modificados durante a execução do programa.

### Exemplo de declaração de variáveis:

```
// Declaração de variável com var (escopo de função ou global)
var nome = "João";

// Declaração de variável com let (escopo de bloco)
if (true) {
  let sobrenome = "Silva";
}

console.log(nome); // Acessível em qualquer lugar do código
console.log(sobrenome); // Acessível apenas dentro do bloco if
```

# Escopos de Variáveis:

O escopo de uma variável define em quais partes do código ela pode ser acessada. Em JavaScript, existem três tipos principais de escopo:

- **Global**: As variáveis ​​globais podem ser acessadas em qualquer lugar do programa. Elas são declaradas utilizando a palavra-chave `var` fora de qualquer bloco de código.
- **De função**: As variáveis ​​de função só podem ser acessadas dentro da função onde foram declaradas. Elas são declaradas utilizando a palavra-chave `var` dentro de uma função.
- **De bloco**: As variáveis ​​de bloco só podem ser acessadas dentro do bloco de código onde foram declaradas. Elas são declaradas utilizando uma palavra-chave `let` ou `const` dentro de um bloco de código, como um loop, uma instrução `if` ou uma função.

## Blocos de código:

Blocos de código são delimitados por chaves (`{}`). Eles agrupam instruções de código e definem um novo escopo para as variáveis ​​declaradas dentro deles. Isso significa que as variáveis ​​declaradas dentro de um bloco só podem ser acessadas dentro daquele bloco e não em outras partes do código.

### Exemplo de blocos de código:

```
// Bloco if com variável de bloco
if (true) {
  let idade = 30;
  console.log(idade); // Acessível dentro do bloco if
}

console.log(idade); // Erro: idade não está definida
```

#### Resumo:

- Utilize `let` para declarar variáveis ​​de bloco e `const` para constantes.
- Evite usar `var` em novos projetos.
- Blocos de código definem um novo escopo para as variáveis ​​declaradas dentro deles.
- As variáveis ​​só podem ser acessadas dentro do escopo em que foram declaradas.

#### [Objetos](../objetos.md)
