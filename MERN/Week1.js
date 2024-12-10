const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(operation, numbers) {
  let result;
  switch (operation) {
    case 'add':
      result = numbers.reduce((acc, num) => acc + num, 0);
      break;
    case 'subtract':
      result = numbers.reduce((acc, num) => acc - num);
      break;
    case 'multiply':
      result = numbers.reduce((acc, num) => acc * num, 1);
      break;
    case 'divide':
      result = numbers.reduce((acc, num) => acc / num);
      break;
    default:
      console.log("Invalid operation");
      return;
  }
  console.log(`The result of ${operation} is: ${result}`);
}

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);

  rl.question("Choose an operation (add, subtract, multiply, divide): ", (operation) => {
    calculate(operation, numbers);
    rl.close();
  });
});
