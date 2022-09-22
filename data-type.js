const string = "Amar desh Bangladesh.";
const sub = string.substring(0, 5);
const total = string.concat(sub);
// console.log(total);
// console.log(string.toLocaleUpperCase());
const float = 12.2525;
const newNumber = parseInt(float);
// console.log(newNumber);
// isInteger(1.0); // true

/* const number = 50.2;
if (number) {
  console.log(number);
} */

/* if (!(number / 2 === 0)) {
  console.log("falsy");
} */

const nullNumber = 5;
if (isNaN(nullNumber)) {
  console.log("NaN");
}

const hello = "";
if (!hello) {
  console.log("falsy");
} else {
  console.log("truthy");
}

const hi = undefined;
if (hi === undefined) {
  console.log("hi undifined");
}
