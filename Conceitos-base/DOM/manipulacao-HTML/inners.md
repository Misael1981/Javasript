# `innerText` e `innerHTML`

`innerText` e `innerHTML` são propriedades usadas em JavaScript para manipular o conteúdo de elementos HTML. A principal diferença está em como elas interpretam esse conteúdo:

- `innerText`: Pega ou define o **texto puro** dentro de um elemento HTML, ignorando tags e formatações. É como se você selecionasse o texto com o mouse e copiasse. Por exemplo, para um elemento `<h1><b>`This is bold`</b></h1>`, o innerText seria apenas "This is bold".

- `innerHTML`: Pega ou define o conteúdo completo de um elemento HTML, incluindo tags e formatação. É como se você copiasse todo o código HTML dentro daquela tag. No mesmo exemplo anterior, o innerHTML seria "`<h1><b>This is bold</b></h1>`".

Aqui está uma tabela resumindo as diferenças:

| Propriedade | Valor retornado | Valor definido |
|-------------|-----------------|----------------|
| texto interno | Texto puro dentro do elemento | Substituir o conteúdo do elemento por texto puro |
| HTML interno | Todo o conteúdo HTML dentro do elemento (incluindo tags) | Substituir o conteúdo do elemento por HTML |

## Quando usar cada um?

- Use innerText quando quiser apenas manipular o texto visível de um elemento.
- Use innerHTML quando precisar inserir elementos HTML completos, como listas, imagens ou parágrafos formatados.

# `textContent`

## Análise de como `textContent` funciona:

- **Obtém conteúdo de texto**: quando você usa `element.textContent`, ele retorna uma string contendo todo o texto dentro do elemento, incluindo quaisquer elementos filhos.
- **Inclui nós de texto**: incorpora o conteúdo dos nós de texto (`<text>elementos`), bem como o conteúdo de texto de outros elementos filhos.
- **Ignora formatação**: foca no texto real e desconsidera quaisquer tags HTML ou formatação aplicada ao elemento.

Aqui está um exemplo para ilustrar isso:

```
<div id="myElement">This is some <b>bold</b> text with a <span>paragraph</span>.</div>
```

Se você usar:

```
const element = document.getElementById("myElement");
const textContent = element.textContent;
console.log(textContent);
```

Isso produzirá:

```
This is some bold text with a paragraph.
```

### Pontos-chave a serem lembrados:

- `textContent` é diferente de `innerText`. Enquanto `textContent` recupera todo o conteúdo de texto, considera apenas o texto diretamente visível dentro do elemento, excluindo texto em elementos ocultos ou formatados de forma diferente com CSS. innerText
- O uso `textContent` é geralmente preferido por razões de segurança, pois evita possíveis vulnerabilidades associadas à injeção de HTML.

### Casos de uso comuns:

- Atualizar dinamicamente o conteúdo de texto de um elemento com base na entrada do usuário ou outros eventos.
- Extrair o conteúdo textual de um elemento para processamento posterior.
- Simplificando o processo de captura do conteúdo geral do texto dentro de um elemento.


### [BOM](../dom.md)