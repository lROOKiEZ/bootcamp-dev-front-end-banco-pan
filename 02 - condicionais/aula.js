const number = 10;
const isEvenNumber = (number % 2) === 0;

if(number === 0){
    console.log('Invalid Number');
} else if(isEvenNumber){
    console.log('Yes');
} else {
    console.log('No');
}