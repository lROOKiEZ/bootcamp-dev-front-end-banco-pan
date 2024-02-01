/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 6, recuperação;
    - Média maior que 6, aprovado;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
media = ((nota1 + nota2 + nota3) / 3).toFixed(0);

if (media < 5) {
    console.log('A sua média é: ' + media + ', então você está reprovado.');
} else if (media >= 5 && media <= 6) {
    console.log('A sua média é: ' + media + ', então você está de recuperação.');
} else {
    console.log('A sua média é: ' + media + ', então você está aprovado.');
}