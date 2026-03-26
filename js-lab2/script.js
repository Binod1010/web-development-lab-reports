const name = "Binod Adhikari";
const age = 25;
const PI = 3.14159;

console.log("name:", name);
console.log("age:", age);
console.log("PI:", PI);

function greet(person) {
  return `Hello, ${person}!`;
}

console.log(greet("Binod Adhikari"));

const add = (a, b) => a + b;
const multiply = (x, y) => x * y;

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 2));

const student = {
  name: "Bob",
  grade: 92,
  age: 20, 
};

console.log(`${student.name} is ${student.age} years old.`);

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log("Squared:", squared);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const arr2 = [...numbers, 4, 5];
console.log("Spread array:", arr2);

const obj2 = { a: 1, b: 2, c: 3 };
console.log("Spread object:", obj2);
