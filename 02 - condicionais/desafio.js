/*Write a program to calculate the cost of a trip.

You will have 5 variables. Being them:
1 - Ethanol price;
2 - Gasoline price;
3 - What type of fuel your car uses;
4 - Average car fuel consumption per km;
5 - Distance in KM for the trip;

Print on the console the amount that will be spent to make this trip.*/

const ethanolPrice = 3.75;
const gasolinePrice = 5.5;
const kmConsumptionPerLiter = 10;
const travelDistance = 1253;
const typeOfFuel = 'Gasoline';

const litersConsumed = travelDistance / kmConsumptionPerLiter;
const totalGasolinePrice = litersConsumed * gasolinePrice;
const totalEthanolPrice = litersConsumed * ethanolPrice;

if (typeOfFuel === 'Gasoline') {
    console.log('The total amount spent on gasoline was: $' + totalGasolinePrice.toFixed(2));
} else {
    console.log('The total amount spent on ethanol was: $' + totalEthanolPrice.toFixed(2));
}