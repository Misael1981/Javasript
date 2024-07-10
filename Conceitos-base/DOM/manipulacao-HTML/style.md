# style

A propriedade `style` em JavaScript é um objeto poderoso que permite manipular diretamente os estilos CSS de um elemento HTML. Por meio dela, você pode acessar, definir ou remover propriedades CSS individuais ou até mesmo aplicar estilos completos em linha.

## Para usar a propriedade `style`:

1. **Obtenha uma referência ao elemento**: Comece selecionando o elemento que deseja estilizar usando métodos como `document.getElementById()`, ou outros. `document.querySelector()`

2. **Acessar a propriedade `style`**: Utilize a notação de ponto ( .) para acessar a propriedade `style` do elemento selecionado.

3. **Manipular as propriedades CSS**: Você pode:

    - **Definir valores**: Atribua um valor à propriedade CSS desejado usando a notação de ponto e o nome da propriedade em camelCase. Por exemplo, para definir a cor de fundo para vermelho: . `element.style.backgroundColor = "red"`
    - **Obter valores**: Utilize a notação de ponto e o nome da propriedade para obter o valor atual. Por exemplo, para obter o cor de fundo atual: . `const backgroundColor = element.style.backgroundColor`
    - **Remover propriedades**: Utilize a palavra-chave removeProperty()e o nome da propriedade para remover a propriedade CSS. Por exemplo, para remover o fio do fundo: . `element.style.removeProperty("backgroundColor")`

## Exemplo:

```
const element = document.getElementById("myElement");

// Define a cor de fundo para vermelho e o padding para 10px
element.style.backgroundColor = "red";
element.style.padding = "10px";

// Obtém a cor da borda (que pode ser definida no CSS)
const borderColor = element.style.borderColor;

// Remove a propriedade de margem
element.style.removeProperty("margin");
```

## Recursos adicionais:

- **Lista de propriedades CSS**: [URL inválida removida]
- **Manipulação de DOM com JavaScript**: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulando_documentos

### Dicas:

- É importante usar camelCase para os nomes das propriedades CSS (por exemplo, em vez de ). `backgroundColorbackground-color`
- Você também pode usar a propriedade `style` para aplicar estilos em linha completa usando um objeto JavaScript. Veja um exemplo:

```
element.style = {
  backgroundColor: "red",
  padding: "10px",
  border: "1px solid black"
};
```

**Lembre-se**: A propriedade `style` oferece grande flexibilidade para estilizar elementos dinamicamente em JavaScript, mas use-a com cuidado para evitar conflitos com estilos CSS definidos no HTML ou em arquivos CSS externos.

### [DOM](../dom.md)