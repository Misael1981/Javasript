# Controle de Fluxo

O controle de fluxo é um aspecto crucial da programação, permitindo que você direcione o curso do seu código de acordo com condições e cenários específicos. No JavaScript, diversas estruturas de controle de fluxo de nomes são flexíveis e organizadas ao seu código. Vamos dar uma olhada em algumas das principais:

## Estruturas de Decisão:

- `if` e `else`: Permitem executar diferentes blocos de código com base em uma booleana.

```
switch (fruta) {
  case "maçã":
    console.log("Você escolheu uma maçã!");
    break;
  case "banana":
    console.log("Você escolheu uma banana!");
    break;
  default:
    console.log("Você não escolheu nenhuma fruta válida.");
}
```

## Laços de Repetição:

- `for`: Executa um bloco de código repetidamente um número predeterminado de vezes.

```
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```
- `while`: Executa um bloco de código repetidamente enquanto uma booleana é verdadeira.

```
let i = 0;
while (i < 10) {
  console.log("Número:", i);
  i++;
}
```
- `do...while`: Semelhante ao `while`, mas a verificação da condição ocorre após a execução do bloco de código.

```
let i = 0;
do {
  console.log("Número:", i);
  i++;
} while (i < 5);
```

## Outras Estruturas:

- `breake continue`: Permitem interromper ou pular para a próxima iteração de um laço de repetição, respectivamente.
- `try...catch`: Usado para lidar com erros e exceções no código.

O uso adequado de estruturas de controle de fluxo torna seu código JavaScript mais legível, eficiente e robusto. Explore a documentação oficial e tutoriais online para se informar sobre cada estrutura e aprimorar suas habilidades de programação.

- [if e else](../controle-de-fluxo/if-else.md)

- [for](../controle-de-fluxo/loop-for.md)

- [while](../controle-de-fluxo/while-loop.md)

- [break e continue](../controle-de-fluxo/break-continue.md)

- [switch](../controle-de-fluxo/Switch.md)