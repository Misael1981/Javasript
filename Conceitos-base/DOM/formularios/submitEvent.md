# Submit event

O evento "submit" é acionado quando um formulário HTML é submetido. Você pode usar esse evento para executar funções ou validar dados antes que o formulário seja enviado para um servidor. Segue um exemplo simples de como se pode definir um evento "submit" em JavaScript:

```
// Selecionando o formulário pelo ID
const form = document.getElementById('meuFormulario');

// Adicionando um ouvinte de evento para o evento 'submit'
form.addEventListener('submit', function(event) {
    // Impedindo o envio padrão do formulário
    event.preventDefault();
    
    // Aqui você pode adicionar sua lógica de validação ou manipulação de dados
    
    // Exemplo de exibição de mensagem ao submeter o formulário
    alert('Formulário enviado com sucesso!');
});
```


Neste exemplo, estamos selecionando um formulário com o ID "meuFormulario" e adicionando um ouvinte de evento para o evento "submit". Dentro da função que é chamada quando o formulário é submetido, estamos impedindo o envio padrão do formulário com event.preventDefault() e exibindo uma mensagem simples.

### [Voltar ao menu-DOM](../dom.md)
