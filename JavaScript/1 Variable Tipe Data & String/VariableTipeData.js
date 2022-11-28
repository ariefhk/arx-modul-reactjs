var name = "John"; // Tipe
var angka = 12;
var todayIsFriday = false;

console.log(name); // "John"
console.log(angka); // 12
console.log(todayIsFriday); // false

var items;
console.log(items); // Undefined

// Var
var y = 1;
if (y === 1) {
  var y = 2;
  console.log(y);
  // expected output: 2
}
console.log(y); // 2

// Let and Const
let x = 1;

if (x === 1) {
  let x = 2;
  console.log("x dari if =>", x);
  // expected output: 2
}

console.log("x dari global =>", x); // 1

const number = 42;
//number = 100; // Uncaught TypeError: Assignment to constant variable
console.log(number);
