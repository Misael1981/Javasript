# O que são Expressões Regulares?

Expressões regulares, conhecidas como regex, são padrões usados para encontrar correspondências de strings dentro de outra string. Elas oferecem uma maneira flexível de pesquisar, manipular texto e validar dados.

No JavaScript, as expressões regulares são integradas na linguagem, permitindo uma ampla gama de operações de busca e manipulação de strings.

## Sintaxe Básica

As RegEx são baseadas em dois elementos: um **padrão** e **modificadores**. Esses elementos, em conjunto, formam a chamada expressão regular, cuja sintaxe básica é bastante simples:

```
/padrão/modificadores
```

A expressão `/devmedia/i`, por exemplo, pode ser utilizada para buscar o padrão “devmedia” sem levar em consideração se as letras são maiúsculas ou minúsculas no texto, por causa do modificador **“i”**.

Os modificadores são opcionais dentro das expressões regulares, e servem para adicionar algum comportamento que, por padrão, elas não possuem. A **Tabela 1** mostra os três modificadores que podem ser utilizados.

**Tabela 1. Modificadores em expressões regulares**

|Modificadore|Descrição|
|------------|---------|
|/|Toda regex começa e termina com /|
|^|Por padrão, a correspondência precisa começar no início da cadeia de caracteres. No modo multilinha, precisa começar no início da linha.|
|$|	Por padrão, a correspondência deve ocorrer no fim da cadeia de caracteres ou antes de `\n` no fim da cadeia de caracteres. No modo multilinha, deve antes do fim da linha ou antes de `\n` no fim da linha.|
|[ character_group ]|Corresponde a qualquer caractere único em character_group. Por padrão, a correspondência diferencia maiúsculas de minúsculas.|
|[primeiro - último ]|Intervalo de caracteres: corresponde a qualquer caractere único no intervalo entre first e last.|
|{min,max}|Após o caracterSet, é um quantificador indicando a quantidade de caracteres que serão aceitos na REGEX|
|`.`|Representa qualquer caracter|
|i|Não leva em consideração maiúsculas e minúsculas (`case-insensitive`).|
|g|`Global Match` – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.|
|m|Procura por ocorrências em múltiplas linhas.|

## Caracteres e Sequências Especiais

Caracteres especiais como `*`, `+`, `?`, `.` têm significados particulares em regex. Por exemplo, `.` corresponde a qualquer caractere, enquanto * corresponde a zero ou mais ocorrências do caractere anterior.