// Personal Budget Tracking Project

console.log('Personal Budget Tracker\n\n');

const userName = prompt('Enter your name:');
let income = Number(prompt('Enter your income:'));
let expenses = Number(prompt('Enter your income:'));

let tax = income * 0.10;
let netIncome = income - tax;
let balance = income - (expenses  + tax);
let savings = balance * 0.20;


console.log(`Welcome ${userName}!\n`);
console.log(`Your income is: ${income}Tk.\n`);
console.log(`Your expenses are: ${expenses}Tk.\n`);
console.log(`Your tax is: ${tax}Tk.\n`);
console.log(`Your net income is: ${netIncome}Tk.\n`);
console.log(`Your balance is: ${balance}Tk.\n`);    
console.log(`Your savings is: ${savings}Tk.\n`);

