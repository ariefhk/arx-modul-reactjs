// String adalah array
let sentences = "Javascript";
console.log(sentences[0]); // "J"
console.log(sentences[2]); // "v"

// Template Literal
const firstName = "John";
const lastName = "Doe";
const teamName = "Mr";
const theString = `${firstName} ${lastName}, ${teamName}`;
console.log(theString); // John Doe, Mr

// String Properties
// .lentgh
let word = "Javascript is awesome";
console.log(word.length); // 21

// charAt
console.log("i am a string".charAt(3)); // 'm'

// concat
let string1 = "good";
let string2 = "luck";
console.log(string1.concat(string2)); // goodluck

// indexOf
let text = "dung dung ces!";
console.log(text.indexOf("dung")); // 0
console.log(text.indexOf("u")); // 1
console.log(text.indexOf("jreng")); // -1

// subtring
let car1 = "Lykan Hypersport";
let car2 = car1.substr(6);
console.log(car2); // Hypersport

//toUpperCase
let letter = "This Letter Is For You";
let upper = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

// toLowerCase
let letter2 = "This Letter Is For You";
let lower = letter2.toLowerCase();
console.log(lower); // this letter is for you

// trim
let username = " administrator ";
let newUsername = username.trim();
console.log(newUsername); // 'administrator'
