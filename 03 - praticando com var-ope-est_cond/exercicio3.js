/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código da condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em 2x, preço normal de etiqueta sem juros;
    - Acima de 2x, preço normal de etiqueta com juros de 10%;
*/

const precoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('O valor final do produto é: ' + (precoProduto - (precoProduto * 0.1)));
} else if (formaDePagamento === 2) {
    console.log('O valor final do produto é: ' + (precoProduto - (precoProduto * 0.15)));
} else if (formaDePagamento === 3) {
    console.log('O valor final do produto é: ' + precoProduto);
} else {
    console.log('O valor final do produto é: ' + (precoProduto + (precoProduto * 0.1)));
}
