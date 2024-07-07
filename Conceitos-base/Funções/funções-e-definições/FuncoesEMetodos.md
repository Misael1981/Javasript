# Funções & Métodos

## Métodos vs Funções em JavaScript: Desvendando os Segredos dos Gigantes da Programação

No reino da programação JavaScript, dois títulos reinam: métodos e funções . Ambos executam tarefas e processam dados, mas cada um possui características e usos diferentes. 

### 1. A Definição dos Campeões:

- **Função**: Uma unidade de código reutilizável que realiza uma tarefa específica. É independente de qualquer objeto e pode ser chamado pelo seu nome.

```
function somar(x, y) {
  return x + y;
}
```

- **Método**: Uma função especial associada a um objeto específico. É acessado através do ponto (. ) e do nome do método do objeto.

```
const pessoa = {
  nome: "João",
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
};

pessoa.apresentar(); // Exibe: Olá, meu nome é João.
```

### 2. Diferenças nos Bastidores:

- **Criação**:
   - **Função**: Criada com a palavra-chave `function` ou `arrow function (=>)`.
   - **Método**: Criado dentro de um objeto, usando a palavra-chave `function`.
- **Acesso**:
   - **Função**: Chamada por seu nome, independente de qualquer objeto.
   - **Método**: Acessado através do ponto (`.` ) e do nome do método do objeto.
- **Propriedade**:
   - **Função**: possui existência independente.
   - **Método**: Pertence ao objeto que foi criado.
- **Contexto**:
   - **Função**: Usa o seu próprio contexto de execução ( `this`).
   - **Método**: Use o contexto do objeto em que foi criado ( `this`do objeto).
- **Uso**:
   - **Função**: Geral para tarefas diversas, lógica e processamento de dados.
   - **Método**: Encapsula o comportamento e as características de um objeto.

### 3. Exemplos na Arena:

**Função em Ação:**

```
function calcularMedia(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

const media = calcularMedia([10, 8, 7, 9]);
console.log(`A média é: ${media}`); // Exibe: A média é: 8.5
```

**Métodos em Ação**

```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const joao = new Pessoa("João", 25);
joao.apresentar(); // Exibe: Olá, meu nome é João e tenho 25 anos.
```

### 4. Quando escolher o Campeão Certo:

- **Função:**

  - Tarefas independentes de objetos.
  - Lógica reutilizável em diferentes contextos.
  - Cálculos e processamentos genéricos.
- **Método:**
  - Encapsular o comportamento de objetos.
  - Gerenciar dados e funcionalidades de objetos.
  - Interaja com propriedades e outros métodos do objeto.