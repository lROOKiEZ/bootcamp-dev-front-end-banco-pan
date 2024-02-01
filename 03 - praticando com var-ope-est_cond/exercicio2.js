/*
    2) O IMC - Indíce de massa corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela abaixo.

    IMC em adultos condição:
    - Abaixo de 18.5, abaixo do peso;
    - Entre 18.5 e 25, peso normal;
    - Entre 25 e 30, acima do peso;
    - Entre 30 e 40, obeso;
    - Acima de 40, obesidade grave;
*/

const altura = 1.80;
const peso = 75;
const imc = (peso / Math.pow(altura, 2)).toFixed(2);

if (imc < 18.5) {
    console.log('Seu IMC é: ' + imc + ', você está abaixo do peso adequado.');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Seu IMC é: ' + imc + ', você está no peso adequado.');
} else if (imc > 25 && imc <= 30) {
    console.log('Seu IMC é: ' + imc + ', você está acima do peso.');
} else if (imc > 30 && imc <= 40) {
    console.log('Seu IMC é: ' + imc + ', você está obeso.');
} else {
    console.log('Seu IMC é: ' + imc + ', você está com obesidade grave.');
}

