const name = "Mohammad Mainuddin";
let age = 21;
// in september 20 - 2022
age = 22;
console.log(name, age);

const number1 = 255;
const number2 = 355;
const number3 = 455;

if (number1 > number2) {
  console.log(`${number1} is bigger then ${number2}`);
}
if (number1 < number2) {
  console.log(`${number1} is less then ${number2}`);
}
if (number1 >= number2) {
  console.log(`${number1} is bigger then or equl ${number2}`);
}
if (number1 <= number2) {
  console.log(`${number1} is less then or equl ${number2}`);
}
if (number1 == number2) {
  console.log(`${number1} is equl of ${number2}`);
}
if (number1 != number2) {
  console.log(`${number1} is not equl of ${number2}`);
}
if (number1 === number2) {
  console.log(`${number1} is equl of ${number2}`);
}
if (number1 !== number2) {
  console.log(`${number1} is not equl of ${number2}`);
}

if (number1 < number2 && number2 < number3) {
  console.log(`${number1} is less then ${number2} and ${number3}`);
}

if (number1 >= number2 || number2 <= number3) {
  console.log("hello");
}

if (number1 > number2 && number1 > number3) {
  console.log(`${number1} is biggest`);
} else if (number1 < number2 && number2 > number3) {
  console.log(`${number2} is biggest`);
} else {
  console.log(`${number3} is biggest`);
}
