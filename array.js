const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const number1 = { name: "kader", roll: 20 };
// console.log(numbers.length);
// numbers.push(21);
// console.log(numbers);
// numbers.pop();
// const hex = numbers.indexof(7);
const copyNumber = numbers.slice(0, 10);
const kataNumber = numbers.splice(5, 2);
const total = numbers.reduce((pre, num) => {
  return pre + num;
}, 0);
const joined = numbers.join(".");
console.log(total);
