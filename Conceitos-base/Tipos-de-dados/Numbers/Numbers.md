# Numbers

## Tipo Number em JavaScript: Um Guia Completo

O tipo `Number` em JavaScript é fundamental para trabalhar com dados numéricos, seja para cálculos matemáticos, manipulação de valores monetários ou qualquer outra aplicação que exija precisão numérica. Neste guia completo, vamos explorar os aspectos essenciais do tipo `Number`, desde a definição de inteiros e decimais até operações complexas e concatenação de strings.

### 1. Definição e Representação

O `Number` representa tipo valores numéricos em JavaScript, utilizando o formato de ponto flutuante de 64 bits do padrão IEEE 754. Isso significa que ele pode armazenar números inteiros e decimais com alta precisão, abrangendo um intervalo entre -(2^53 - 1) e 2 ^53 - 1.

#### 1.1 Inteiros e Decimais:

- *Inteiros*: São números sem parte decimal, como 10, 256 ou -3000. Em JavaScript, os inteiros são representados internamente como decimais, mas com precisão suficiente para lidar com grandes valores inteiros sem perda de informação.

- *Decimais*: São números com parte decimal, como 3. 14, 10. 50 ou -2. 75. O tipo `Number` armazena decimais com alta precisão, utilizando o formato de ponto flutuante.

### 2. Operadores Aritméticos

O JavaScript oferece uma gama completa de operadores aritméticos para trabalhar com valores do tipo `Number`:

- *Adição* (+): Soma dois números. Ex: 5 + 3 = 8
- *Subtração* (-): Subtrai um número de outro. Ex: 10 - 4 = 6
- *Multiplicação* (*): Multiplica dois números. Ex: 2 * 7 = 14
- *Divisão* (/): Divide um número por outro. Ex: 16 / 4 = 4
- *Exponenciação* ( ): ** Eleva um número a uma potência. Ex: 2 ** 3 = 8
*Módulo* (%): Retorno ao resto da divisão entre dois números. Ex: 11 % 3 = 2

### 3. Ordem de Operações e Precedência

A ordem de operações define a sequência na qual as operações matemáticas são realizadas em uma expressão. No JavaScript, a ordem de precedência segue as seguintes regras:

- 1.*Parênteses ()*: As operações dentro de parênteses são realizadas primeiro.
- 2.*Exponenciação* (^): A exponenciação é realizada em seguida.
- 3.*Multiplicação* (*) e Divisão (/): Multiplicação e divisão são realizadas da esquerda para a direita.
- 4.*Adição* (+) e Subtração (-): Adição e subtração são realizadas da esquerda para a direita.

```
5 + 3 * 2 ^ 4 = 5 + 3 * 16 = 5 + 48 = 53
```

### 4. Operadores de Incremento e Decremento

Os operadores de incremento e decremento permitem modificar valores numéricos de forma rápida e concisa:

- *Incremento* (++, ++x): Adicionado 1 ao valor da variável. Ex: `x = 5; x++; // x agora é 6`
- *Decremento* (--, --x): Subtrai 1 do valor da variável. Ex: `y = 10; y--; // y agora é 9`

### 5. Operadores de Atribuição com Operação

Os operadores de atribuição com operação combinam a atribuição de um valor com a realização de uma operação matemática:

- *Adição e Atribuição* (+=): Adiciona um valor à variável e atribui o resultado à mesma. Ex: `z += 7; // z agora é 16 (se z era 9)`

- *Subtração e Atribuição* (-=): Subtrai um valor da variável e atribui o resultado à mesma. Ex: `w -= 4; // w agora é 3 (se w era 7)`

- *Multiplicação e Atribuição* ( =): Multiplica um valor pela variável e atribui o resultado à mesma. Ex: `v *= 3; // v agora é 21 (se v era 7)`

- *Divisão e Atribuição* (/=): Dividir a variável por um valor e atribuir o resultado à mesma. 

- *Módulo e Atribuição* (%=): Realiza o módulo da divisão entre a variável e um valor e atribui o resultado à mesma. Ex: `a %= 5; // a agora é 1 (se a era 6)`

### 6. NaN e Infinito

O JavaScript possui dois valores especiais para representar situações complicadas:

- *NaN (Not a Number)*: Representa um valor numérico inválido ou indefinido. Ex: `NaN / 2 = NaN`

### 7. Concatenação de Strings

Embora o tipo Numberseja destinado a dados numéricos, ele pode ser concatenado com strings usando o operador +:

- *Exemplo*: `let message = "O resultado é: " + 12.34; // message conterá a string "O resultado é: 12.34"`

### 8. Funções Úteis

O JavaScript oferece diversas funções úteis para trabalhar com o tipo `Number`:

- `parseInt(string, radix)`: Converte uma string para um número inteiro, com base na raiz (opcional, padrão 10).

- `parseFloat(string)`: Converte uma string para um número de ponto flutuante.

- `isNaN(number)`: Verifique se um valor é NaN.

- `isFinite(number)`: Verifica se um valor é finito (não NaN e não Infinity).

- `Number.MAX_VALUE`: Retorna o maior valor numérico possível.

- `Number.MIN_VALUE`: Retorna o menor valor numérico possível.

### 9. Exemplos Práticos

Para ilustrar os conceitos envolvidos, vejamos alguns exemplos práticos:

```
// Inteiros e Decimais
let numero1 = 10; // Inteiro
let numero2 = 3.14; // Decimal

// Operadores Aritméticos
let soma = numero1 + numero2; // soma = 13.14
let diferenca = numero1 - numero2; // diferenca = 6.86
let produto = numero1 * numero2; // produto = 31.4
let quociente = numero1 / numero2; // quociente = 3.18

// Ordem de Operações
let expressao = 2 + 3 * 5; // expressao = 17

// Operadores de Incremento e Decremento
let contador = 0;
contador++; // contador = 1
contador--; // contador = 0

// Operadores de Atribuição com Operação
let valor = 10;
valor += 5; // valor = 15
valor *= 2; // valor = 30

// NaN e Infinity
let resultado = 0 / 0; // resultado = NaN
let infinito = 1 / 0; // infinito = Infinity

// Concatenação de Strings
let texto = "O total é: " + valor; // texto = "O total é: 30"

// Funções Úteis
let numeroString = "12.5";
let numeroInteiro = parseInt(numeroString); // numeroInteiro = 12
let numeroDecimal = parseFloat(numeroString); // numeroDecimal = 12.5

```

#### [Tipos de dados](../tipos-de-dados.md)