//////////////////////////// section 1 ////////////////////////////

const number1 = +prompt('Enter first side of the triangle')
const number2 = +prompt('Enter second side of the triangle')
const number3 = +prompt('Enter third side of the triangle')

if(number1 + number2 > number3 && number2 + number3 > number1 && number1 + number3 > number2){
    console.log('Triangle is valid');
} else {
    console.log('Triangle is not valid');
}

//////////////////////////// section 2 ////////////////////////////

if (number1 > number2 && number1 < number3 && number1 < number2 && number1 > number3){
    console.log ('Your number is between number 2 and number 3')
} else if(number1 < number2 && number1 > number3) {
    console.log ('Your number is between number 2 and number 3')
} else{
    console.log ('Your number is not between number 2 and number 3')
}

//////////////////////////// section 3 ////////////////////////////

const date = +prompt('Enter your birth year')

if (date % 4 === 0 && date % 100 !== 0){
    console.log('Your birth year is a leap year')
} else if (date % 400 === 0){
    console.log('Your birth year is a leap year')
} else {
    console.log('Your birth year is not a leap year ')
}



