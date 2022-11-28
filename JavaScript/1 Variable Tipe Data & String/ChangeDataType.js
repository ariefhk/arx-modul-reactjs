// Cara ke-satu
let int = 12;
let real = 3.45;
let arr = [6, 7, 8];
let strInt = String(int);
let strReal = String(real);
let strArr = String(arr);
console.log(strInt); // '12'
console.log(strReal); // '3.45'
console.log(strArr); // '6,7,8'

// toString
let number = 21;
console.log(number.toString()); // '21'
let array = [1, 2];
console.log(array.toString()); // '1,2'

// Number
let number1 = Number("90"); // number1 = 90
let number2 = Number("1.23"); // number2 = 1.23
let number3 = Number("4 5"); // number3 = NaN

// parseInt & parseFloat
let int2 = "89";
let real2 = "56.7";
let strInt_1 = parseInt(int2); // strInt_1 = 89
let strInt_2 = parseInt(real2); // strInt_2 = 56
let strReal_1 = parseFloat(int2); // strReal_1 = 89
let strReal_2 = parseFloat(real2); // strReal_2 = 56.7
