const friend = {
  name: "ononto jalil",
  id: 121,
  job: "fileming star",
  movies: ["din the day", "imposible to posible", "you are my borsha"],
  personal: {
    profetion: "busnessman",
    wife: "borsha",
    isRich: true,
    child: ["abdur rohim", "abdul korim", "abdul jabbar"],
    welth: 9000000000,
  },
};

const personal = `${friend ? friend.name : "kader siddique"} is a ${
  friend.job
}.in personal life he is a ${friend.personal.profetion}. his first movie is ${
  friend.movies[0]
} and second movie is ${friend.movies[1]} and last and final movie is ${
  friend.movies[2]
}. he has one wife name ${friend.personal.wife}.his walth is around ${
  friend.personal.welth
} taka. he has 3 kid .the are ${friend.personal.child[0]}, ${
  friend.personal.child[1]
}, and ${friend.personal.child[2]}`;

// console.log(personal);

const nums = [1, 2, 3, 4, 5];
const nums2 = [...nums, 6, 7, 8, 9];
const total = nums.reduce((pre, num) => {
  return pre + num;
}, 0);
// console.log(total);
// console.log(nums2, ...nums);

const returns = () => {
  return 9;
};
// console.log(returns());

const sum = (num = 1) => {
  return num * 12;
};
// console.log(sum());

const number = { name: "kader", id: 121, play: "football", job: "student" };
const { name, ...rest } = number;
// console.log(name, rest);

const num1 = Math.round(Math.random() * 10);
// nums
const mathbuiltin = Math.abs(...nums);
// console.log(mathbuiltin);

const date = Date.now();
// const month = date.getDay();
// console.log(date, month);
const birthday = new Date("september 20, 2000 00:10:18");
// console.log(birthday);

const json = JSON.stringify(friend);
// console.log(json);
const parse = JSON.parse(json);
// console.log(parse);

/* const cart = () => {
  const dataStored = localStorage.getItem("cart");
  let cart = {};
  if (dataStored) {
    cart = JSON.parse(dataStored);
  }
  return cart;
};
 */
const numb = [1, 2, 3, 4, 5, 7, 6, 8, 9];
const double = numb.map((num) => num * 2);
// console.log(double);
// const foreach = numb.forEach((num) => console.log(num));
// console.log(foreach);
const filtered = numb.filter((num) => num % 2 !== 0);
// console.log(filtered);
const finded = numb.find((num) => num % 2 === 0);
// console.log(finded);

const hello = `${finded ? friend.name : "mister kashem"}`;
// console.log(hello);git 

hello ? console.log(hello) : console.log(finded);
