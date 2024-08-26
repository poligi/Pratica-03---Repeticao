/*
Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/

let alturas 

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt("Digite a altura da pessoa " + (i + 1) + " em metros:"));
    alturas.push(altura);
}

let menorAltura = Math.min(...alturas);
let maiorAltura = Math.max(...alturas);

document.write("A menor altura do grupo é: " + menorAltura + " metros.<br>");
document.write("A maior altura do grupo é: " + maiorAltura + " metros.");