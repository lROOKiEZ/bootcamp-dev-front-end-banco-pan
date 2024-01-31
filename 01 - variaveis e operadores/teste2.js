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

function typeOfVehicle(choose){
    switch (choose){
        case 'Gasoline Vehicle':
            console.log('O gasto total de Gasolina foi de: R$' + totalGasolinePrice);
            break;
        case 'Ethanol Vehicle':
            console.log('O gasto total de Ethanol foi de: R$' + totalEthanolPrice.toFixed(2));
            break;
        case 'Exit':
            console.log("Saindo do menu. Adeus!");
            break;
    }
}

function menu() {
    showMenu();
  
    rl.question('Digite o número da opção desejada:', function(choose) {
      typeOfVehicle(choose);
      if (choose == "1") {
        typeOfVehicle('Gasoline Vehicle');
        rl.close();
      }else if(choose == "2"){
        typeOfVehicle('Ethanol Vehicle');
        rl.close();
      }else {
            console.log("Saindo do menu. Adeus!");
            rl.close();
      }
    })
}

const ethanolPrice = 3.75;
const gasolinePrice = 5.5;
const kmConsumptionPerLiter = 10;
const travelDistance = 1253;

const litersConsumed = travelDistance / kmConsumptionPerLiter;
const totalGasolinePrice = litersConsumed * gasolinePrice;
const totalEthanolPrice = litersConsumed * ethanolPrice;

menu();