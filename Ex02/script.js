/*
Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/

let alturaPedro = 1.50;
let alturaLucas = 1.10;

// Taxa de crescimento anual
let crescimentoPedro = 0.02; // 2cm = 0,02m
let crescimentoLucas = 0.03; // 3cm = 0,03m

let anos = 0

while (alturaLucas <= alturaPedro) {
    alturaPedro += crescimentoPedro;
    alturaLucas += crescimentoLucas;
    anos++;
}

document.write("Serão necessários " + anos + " anos para que Lucas e Pedro tenham o mesmo tamanho.<br>");
document.write("Após mais 1 ano, Lucas será maior que Pedro.");