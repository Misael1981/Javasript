# `classList`

É `classList` uma interface poderosa em JavaScript que torna a manipulação de classes CSS em elementos HTML mais fácil e intuitiva. Ele fornece métodos simples para adicionar, remover, verificar e alternar classes, permitindo que você gerencie dinamicamente a aparência dos seus elementos.

### Para usar o `classList`:

1. **Obtenha uma referência ao elemento**: Comece selecionando o elemento que deseja manipular usando métodos como `document.getElementById()`, `document.querySelector()` ou outros.

2. **Acesse o `classList`**: Utilize a propriedade `classList` do elemento selecionado.

3. Utilize os métodos do `classList`:

   -  `add(className1, className2, ...)`: Adiciona uma ou mais classes ao elemento. Se as classes já existirem, elas não serão duplicadas.
   -  `remove(className1, className2, ...)`: Remover as classes especificadas do elemento.
   -  `contains(className)`:Verifique se o elemento possui a classe especificada. Retorna `true` se a classe existir, `false` caso contrário.
   - `toggle(className)`:Alterna a presença da classe especificada no elemento. Se a classe existir, ela foi afetada. Se não existir, ela é adicionada.

### Exemplo:

```
const element = document.getElementById("myElement");

// Adiciona as classes "ativo" e "destaque"
element.classList.add("ativo", "destaque");

// Verifica se a classe "ativo" está presente
const isActive = element.classList.contains("ativo");
console.log(isActive); // Imprime "true"

// Remove a classe "destaque"
element.classList.remove("destaque");

// Alterna a presença da classe "grande"
element.classList.toggle("grande");
```

### Recursos adicionais:

- **Documentação do classList**: [Mozzila]( https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- **Manipulação de classes CSS com JavaScript**:  [w3schools](https://www.w3schools.com/js/js_classes.asp)

### Dicas:

- Você pode passar várias classes como argumentos para os métodos `add()`, `remove()` e `toggle()`.
- Ele `classList` é compatível com a maioria dos navegadores modernos, mas verifique a compatibilidade em navegadores mais antigos.
- Para uma manipulação mais complexa de classes, você pode usar bibliotecas JavaScript como jQuery ou frameworks como React ou Vue.js.

### [DOM](../dom.md)
