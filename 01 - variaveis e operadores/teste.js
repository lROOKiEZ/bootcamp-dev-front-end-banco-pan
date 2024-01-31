const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("===== Menu =====");
  console.log("1. Gasoline Vehicle");
  console.log("2. Ethanol Vehicle");
  console.log("0. Exit");
}

function typeOfVehicle(choose, ethanolPrice, gasolinePrice, kmConsumptionPerLiter, travelDistance) {
  const litersConsumed = travelDistance / kmConsumptionPerLiter;

  switch (choose) {
    case 'Gasoline Vehicle':
      const totalGasolinePrice = litersConsumed * gasolinePrice;
      console.log('O gasto total de Gasolina foi de: R$' + totalGasolinePrice.toFixed(2));
      break;
    case 'Ethanol Vehicle':
      const totalEthanolPrice = litersConsumed * ethanolPrice;
      console.log('O gasto total de Ethanol foi de: R$' + totalEthanolPrice.toFixed(2));
      break;
    case 'Exit':
      console.log("Saindo do menu. Adeus!");
      break;
  }
}

function menu() {
  showMenu();

  rl.question('Digite o número da opção desejada:', function (choose) {
    if (choose === "1") {
      rl.question('Digite o preço da Gasolina por litro:', function (gasolinePrice) {
        rl.question('Digite o consumo em km por litro:', function (kmConsumptionPerLiter) {
          rl.question('Digite a distância da viagem em km:', function (travelDistance) {
            typeOfVehicle('Gasoline Vehicle', 0, parseFloat(gasolinePrice), parseFloat(kmConsumptionPerLiter), parseFloat(travelDistance));
            rl.close();
          });
        });
      });
    } else if (choose === "2") {
      rl.question('Digite o preço do Ethanol por litro:', function (ethanolPrice) {
        rl.question('Digite o consumo em km por litro:', function (kmConsumptionPerLiter) {
          rl.question('Digite a distância da viagem em km:', function (travelDistance) {
            typeOfVehicle('Ethanol Vehicle', parseFloat(ethanolPrice), 0, parseFloat(kmConsumptionPerLiter), parseFloat(travelDistance));
            rl.close();
          });
        });
      });
    } else {
      console.log("Saindo do menu. Adeus!");
      rl.close();
    }
  });
}

menu();