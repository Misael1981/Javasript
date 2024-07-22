# Outros eventos

## `copy event`

- Disparado quando o usuário inicia uma ação de cópia por meio da interface de usuário do navegador.

- A ação padrão do evento é copiar a seleção (se houver) para a área de transferência.

### Sintaxe

- Use o nome do evento em métodos como `addEventListener()`ou defina uma propriedade do manipulador de eventos.

```
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## `mousemove`

- Disparado em um elemento quando um dispositivo apontador (geralmente um mouse) é movido enquanto o ponto de acesso do cursor está dentro dele.

### Sintaxe

- Use o nome do evento em métodos como `addEventListener()`ou defina uma propriedade do manipulador de eventos.

```
addEventListener("mousemove", (event) => {});

onmousemove = (event) => {};
```

- `offsetX`: A coordenada X do ponteiro do mouse em relação à posição do último `mousemove` do evento.

- `offsetY`: A coordenada Y do ponteiro do mouse em relação à posição da borda de preenchimento do nó de destino.

## `wheel`

- Dispara quando o usuário gira um botão de roda em um dispositivo apontador (tipicamente um mouse). Ele também é disparado para dispositivos relacionados que simulam ações de roda, como trackpads e mouse balls.

- Não confunda o `wheel`evento com o `scroll`evento:

## Sintaxe

Use o nome do evento em métodos como `addEventListener()` ou defina uma propriedade do manipulador de eventos.

```
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

- `pageX`: Deslocamento horizontal da roda do mouse (positivo para rolagem para a direita, negativo para a esquerda).

- `pageY`: Deslocamento vertical da roda do mouse (positivo para rolagem para baixo, negativo para rolagem para cima).