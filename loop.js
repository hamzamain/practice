/* let i = 0;
while (i < 20) {
  // i += 1;
  console.log(i);
  if (i === 11) {
    break;
  }
  i++;
} */

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 13, 14, 15, 16, 17, 18, 29, 20,
];

/* for (let i = 0; i < 20; i++) {
  const index = i;
  const num = numbers[index];
  console.log(num);
} */

for (const num of numbers) {
  console.log(num);
}

const friends = {
  name: "kamel",
  roll: 121,
  id: 20,
  job: "tutu company",
  salary: 2000,
};

for (const property in friends) {
  console.log(property, friends[property]);
}
