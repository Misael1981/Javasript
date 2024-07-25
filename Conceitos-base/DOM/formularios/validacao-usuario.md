# Validação de formulário do lado do usuário

Antes de enviar dados para o servidor, é importante garantir que todos os controles de formulário necessários sejam preenchidos, no formato correto. Isso é chamado de validação de formulário do lado do usuário e ajuda a garantir que os dados enviados correspondam aos requisitos definidos nos vários controles de formulário. Este artigo o conduz por conceitos básicos e exemplos de validação de formulário do lado do usuário.

A validação do lado do usuário é uma verificação inicial e um recurso importante da boa experiência do usuário; ao capturar dados inválidos no lado do usuário, o usuário pode corrigi-los imediatamente. Se eles chegarem ao servidor e forem rejeitados, um atraso perceptível é causado por uma viagem de ida e volta ao servidor e depois de volta ao lado do usuário para dizer ao usuário para corrigir seus dados.

## Diferentes tipos de validação do lado do usuário

Existem dois tipos diferentes de validação do lado do usuário que você encontrará na web:

- **A validação de formulário integrada** usa recursos de validação de formulário HTML. Essa validação geralmente não requer muito JavaScript. A validação de formulário integrada tem melhor desempenho do que JavaScript, mas não é tão personalizável quanto a validação JavaScript.
- **A validação JavaScript** é codificada usando JavaScript. Essa validação é completamente personalizável, mas você precisa criar tudo (ou usar uma biblioteca).

### Validação JavaScript

Uma das validações que pode ser feita via JavaScript é a validação em tempo real, enquanto o usuário estiver digitando, antes mesmo do usuário submeter o form.

## Como implementar esse tipo de comportamento?

### 1. Obter e armazenar a refência do input que tem o valor que é "recebido" do usuário.

```
const form = document.querySelector('.form-html')

form.idInput.addEventListener('keyup', event => {
    const valorInput = event.target.value
})
```

- `keyup` é um event disparado quando uma tecla é liberada

### 2. Testar se toda vez que uma tecla é liberada, o padrão que foi estabelecido na regex, da match com o valor do input

```
const form = document.querySelector('.form-html')

form.idInput.addEventListener('keyup', event => {
    const valorInput = event.target.value
    const valorRegex = /^[a-zA-Z]{6, 12}$/
    const validacaoValor = valorRegex.test(valorInput)

    if(validacaoValor) {

    }
})
```

### 3. Para dar o feedback em tempo real ao usuário

CSS
```
.success {
    border: 2px solid green;
}
.error {
    border: 2px solid red;
}
```

JavaScript

```
const form = document.querySelector('.form-html')

form.idInput.addEventListener('keyup', event => {
    const valorInput = event.target.value
    const valorRegex = /^[a-zA-Z]{6, 12}$/
    const validacaoValor = valorRegex.test(valorInput)

    if(validacaoValor) {
        form.valorInput.setAttribute('class', "success")
        return
    }
    form.valorInput.setAttribute('class', "error")
})
```

- Quando o aplicativo estiver em uso pelo usuário, toda vez que a tecla for liberada, a validação do valor input acontece, e a borda muda de cor.


### [Voltar ao menu do DOM](../dom.md)