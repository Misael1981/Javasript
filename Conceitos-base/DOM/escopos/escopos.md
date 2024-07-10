# Escopo de Função, Escopo de Bloco e Escopo Léxico: Desvendando os Segredos da Visibilidade de Variáveis

No mundo da programação, as variáveis ​​​​são como os personagens principais da história: elas armazenam informações cruciais que definem o curso do programa. Mas assim como os personagens só podem atuar em determinados cenários, as variáveis ​​​​também têm um "palco" específico onde podem ser usados ​​​​e vistas - isso é chamado de **escopo** .
```
Escopos são a visibilidade de uma variável
```
Entender os diferentes tipos de escopo é fundamental para escrever código claro, organizado e livre de erros. Vamos mergulhar em cada um deles:

## 1. Escopo de Função:

Imagine uma função como uma peça de teatro. As variáveis e contantes ​​​​declaradas dentro da função são apenas acessíveis e alcançadas dentro dos limites daquela peça. Elas são como os atores que entram e saem do palco, invisíveis para o público quando não estão em cena.

### Exemplo:

```
function minhaFuncao() {
  let variavelLocal = "Sou uma variável local";
  console.log(variavelLocal); // "Sou uma variável local"
}

console.log(variavelLocal); // Erro! A variável 'variavelLocal' não está definida fora da função
```

## 2. Escopo de Bloco:

Em alguns cenários, como em estruturas de controle (if, while, for), podemos ter um escopo ainda mais restrito, chamado de escopo de bloco . As variáveis (`let` e `const`) ​​​​declaradas dentro de um bloco só são possíveis e acessíveis dentro daquele bloco, como se estivessem em um camarim nos bastidores.
 Já a `var`, tem escopo diferente e **pode** ser acessada fora do bloco.

### Exemplo:

```
if (true) {
  let variavelDeBloco = "Só existo neste bloco";
  console.log(variavelDeBloco); // "Só existo neste bloco"
}

console.log(variavelDeBloco); // Erro! A variável 'variavelDeBloco' não está definida fora do bloco
```

## 3. Escopo Léxico:

O **escopo léxico** , também conhecido como escopo estático , é o mais abrangente e determina a visibilidade de uma variável com base na estrutura hierárquica do código. Variáveis ​​​​declaradas em um escopo externo estão disponíveis para escopos aninhados dentro dele, mas não vice-versa. Imagine um conjunto de bonecas russas: as bonecas menores podem ver o que está dentro da maior, mas a boneca maior não pode ver o que está dentro das menores.

### Exemplo:

```
let variavelGlobal = "Sou global";

function minhaFuncao() {
  let variavelLocal = "Sou local";
  console.log(variavelGlobal); // "Sou global"
  console.log(variavelLocal); // "Sou local"
}

minhaFuncao();
console.log(variavelLocal); // Erro! A variável 'variavelLocal' não está definida fora da função
```

### Resumo:

- **Escopo de Função**: Variáveis ​​​​visíveis apenas dentro da função onde foram declaradas.
- **Escopo de Bloco**: Variáveis ​​​​visíveis apenas dentro do bloco onde foram declaradas (if, while, for).
- **Escopo Léxico**: Variáveis ​​​​visíveis em escopos aninhados, desde que estejam dentro da mesma hierarquia.

Dominar os conceitos de escopo é crucial para escrever código organizado, eficiente e livre de erros.

 Utilize-os com maestria para que suas variáveis ​​atuem nos lugares certos e no momento certo, como verdadeiros astros da programação!

### [DOM](../dom.md)