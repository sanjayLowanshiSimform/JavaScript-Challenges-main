// Challenge 03 Arrow Functions

const mathFunction = (a, b) =>{
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
}
const output = mathFunction(5, 3);
console.log(output);