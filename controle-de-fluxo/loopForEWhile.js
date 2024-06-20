// Utilizando o Loop While, exiba todos os números entre 0 e 5,
// inclusive esses dois
/*
let i = 0

while (i <= 5) {
    console.log(i)
    i++
}
*/

// 2- Utilizando o loop for, faça o mesmo que foi pedido 
// no exercício anterior
/*
for (let i = 0; i <= 5; i++ ) {
    console.log(i)
}
*/
/*
03- Escreva um loop (for ou while) que exiba a frase abaixo no console;
- Substitua o "X" pela informação correta;
- "X" deve começar em 1 na 1° exibição da frase e em 10 última
- Exiba a frase 10 vezes no console.

"Esta é a Xº vez que esta frase é exibida no console."
*/ 
/*
for(let x = 1; x <= 10; x++) {
    console.log(`Esta é a ${x}º vez que esta frase é exibida no console.`)
}
*/
/*
let x = 1

while (x <=10) {
    console.log(`Esta é a ${x}º vez que esta frase é exibida no console.`)
    x++
}*/

/*
- Abaixo da constante cities, declare uma let "upperCaseCities" e atribua a ela um array vazio;
- Adicione no array que a "upperCaseCities" armazena as cidades do array cities com todas as letras maiúsculas, utilizando o for loop.
- Para ver se deu certo, exiba o "upperCaseCities" no console.
*/
/* 
const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toLocaleUpperCase())
}

console.log(upperCaseCities)
*/
/*
05- Após a const names, utilize um loop for para gerar um template HTML;
- Exiba no console o Template HTML que vc gerou;
-O template deve ser exibido apenas uma vez no console

*/

const names = ['João Grilo', 'Chicó', 'Rosinha']

for (let i = 0; i < names.length; i++) {
    const tamplateHtml = `
    <li>${names[i]}</li>
    `
    console.log(tamplateHtml)
}


