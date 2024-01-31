/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const ethanolPrice = 3.75;
const gasolinePrice = 5.5;
const kmConsumptionPerLiter = 10;
const travelDistance = 1253;

const litersConsumed = travelDistance / kmConsumptionPerLiter;
const totalGasolinePrice = litersConsumed * gasolinePrice;
const totalEthanolPrice = litersConsumed * ethanolPrice;

console.log('O gasto total de Gasolina foi de: R$' + totalGasolinePrice);

console.log('O gasto total de Ethanol foi de: R$' + totalEthanolPrice.toFixed(2));