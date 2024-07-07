# Tipos de referência

Os tipos de referência são cruciais para entender como as variáveis ​​​​armazenam e acessam dados. Ao contrário de outros tipos como `number` ou `string`, que armazenam seus próprios valores, os tipos de referência armazenam referências à memória onde os dados residem. Essa distinção fundamental impacta como os dados são manipulados e compartilhados no seu código.

| Tipos Primitivos | Tipos de Referência |
|------------------|---------------------|
|- Number  |- Todos os tipos de objetos  |
|- Strings  |   - Objetos Literais       |
|- Booleans   |   - Arrays               | 
|- Null       | - Funções                  |
|- Undefined  | -  Datas                 |
|- Symbol     |  - Todos os outros objetos |
|- Biglnt     |                          |

A principal diferença entre os tipos está na forma em que eles são armazenados na memória.

- **Tipos Primitivos**
  - São armazenados em **stacks**;
  - A **stack** é uma pilha de diferentes valores na memória. E esses valores podem ser acessados rapidamente;
  - O espaço dentro da **stack** é limitado;

- **Tipos de Referência**
  - São armazenados em **heaps**;
  - O **heap** tem mais espaço disponível para ques ejam armazenados objetos maiores e mais complexos;
  - O **heap** é um espaço um pouco mais lento;


## Tipos de Referência em Detalhes:

- **Objetos**: O tipo de referência mais comum. Variáveis ​​​​que referenciam objetos armazenam a localização na memória onde o objeto reside. Isso significa que **modificar o objeto através de uma variável** afeta o objeto original em todos os lugares do código onde ele é referenciado.
- **Arrays**: Arrays também são tipos de referência. Eles armazenam referências aos elementos do array na memória. Alterar um elemento do array através de uma variável **modifica o array original** em qualquer lugar do código onde ele é referenciado.
- **Funções**: As funções também são tipos de referência. Variáveis ​​​​que referenciam funções armazenam a localização na memória da função. Isso permite que você passe funções como argumentos para outras funções e crie closures.

## Vantagens dos Tipos de Referência:

- **Eficiência de Memória**: Como os tipos de referência armazenam apenas referências, não copiando os dados em si, eles podem permitir memória , especialmente ao lidar com grandes estruturas de dados.
- **Compartilhamento de dados**: Tipos de referência facilitam o **compartilhamento de dados** entre diferentes partes do seu código. Modificar um objeto ou array através de uma variável torna as alterações possíveis em qualquer lugar onde ele seja referenciado.

## Desafios e Cuidados:

- **Mutações Inesperadas**: Devido ao compartilhamento de dados, modificações em um objeto ou array através de uma variável podem ter **efeitos colaterais inesperados** em outras partes do seu código. É crucial ter cuidado ao trabalhar com tipos de referência e manter o controle de como as variáveis ​​​​referem-se aos mesmos dados.
- **Problemas de Cópia**: Ao passar tipos de referência como argumentos para funções, é importante entender se a função **cria uma cópia** do objeto ou array ou se modifica o original . Cópias são necessárias quando você não deseja que alterações na função afetem o objeto ou array original.

## Dicas para trabalhar com Tipos de Referência:

- **Utilizar imutabilidade**: Quando possível, utilize técnicas de imutabilidade para criar cópias de objetos e matrizes que não podem ser modificadas após a criação. Isso ajuda a evitar mutações inesperadas.
- **Gerência do escopo**: Esteja ciente do escopo de suas variáveis ​​​​e como elas podem afetar os tipos de referência. Utilize funções anônimas e closures para criar escopos isolados e evitar conflitos.
- **Comunique suas intenções**: Use nomes de variáveis ​​​​e comentários descritivos para explicar claramente como os tipos de referência estão sendo usados ​​​​no seu código. Isso facilita a leitura e a compreensão do código para você e outros desenvolvedores.

## Conclusão:

Os tipos de referência são ferramentas poderosas no JavaScript que oferecem eficiência de memória e compartilhamento de dados. No entanto, é importante usá-los com cuidado e entender seus desafios para evitar problemas e escrever código limpo e robusto. Ao seguir as dicas e práticas recomendadas, você poderá aproveitar todo o potencial dos tipos de referência para criar aplicações JavaScript bem organizadas e eficientes.

#### [Objetos](../objetos.md)