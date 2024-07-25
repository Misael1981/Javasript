# Validação de formulários

## Inserção de texto como feedback ao usuário

### 1. Obter o valor que inserido pelo usuário no input;

```
const form = document.querySelector(".html-form")

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.idInput.value
})
```

### 2. Criar uma regex que de match com o padrão de validação

```
const form = document.querySelector(".html-form")

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.idInput.value
    const regex = /^[a-zA-Z]{6, 12}$/
    const regexValid = regex.test(valueInput)
})
```

### 3. Avalialiar se o o valor é válido

```
const form = document.querySelector(".html-form")

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.idInput.value
    const regex = /^[a-zA-Z]{6, 12}$/
    const regexValid = regex.test(valueInput)

    if (regexValid) {

    }
})
```

### 4. Dar um feedback ao usuário

#### HTML

```
<form class="html-form">
    <input type="text" id="idInput          placeholder="username" autofocus>
    <button>Enviar</button>
    <p class="feedback"></p>
</form>
```

#### JavaScript

```
const form = document.querySelector(".html-form")
const feedback = document.querySelector(".feedback")

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueInput = event.target.idInput.value
    const regex = /^[a-zA-Z]{6, 12}$/
    const regexValid = regex.test(valueInput)

    if (regexValid) {
        feedback.textContent = "Valor válido!"
        return
    }
    feedback.textContent = "O valor deve conter entre 6 e 12 caracteres e deve conter apenas letras!"
})
```

- Estes valores serão inseridos no browser do usuário;

### [Voltar ao menu do DOM](../dom.md)