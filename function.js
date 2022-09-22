function add() {
  console.log(
    "allahu allahu tumi jalle jalaluhu, shesh korato jayna geye tomar guno gan"
  );
  return "allahu allahu gojol";
}

const output = add();
console.log(output);

const sum = (num1, num2) => {
  const total = num1 + num2;
  arguments;
  console.log(arguments[5]);
  return total;
};

const result = sum(10, 20, 30, 40, 50, 60, 70);
console.log(result);
