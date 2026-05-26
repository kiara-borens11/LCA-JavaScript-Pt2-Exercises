// TODO: Create a multiline string using template literals.

let message = `
Welcome to JavaScript ES6!
This is a multiline string.
Template literals make coding easier and cleaner.
`;

console.log(message);


// TODO: Create a function that uses template literals for HTML generation.

function createCard(name, course) {

    let html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Course: ${course}</p>
    </div>
    `;

    return html;
}

console.log(createCard("Kiara", "Frontend Development"));


// TODO: Convert regular functions to arrow functions.

// Regular function
function addNumbers(a, b) {
    return a + b;
}

// Arrow function version
const addNumbersArrow = (a, b) => a + b;

console.log(addNumbersArrow(5, 3));


// Regular function
function greetUser(name) {
    return "Hello " + name;
}

// Arrow function version
const greetUserArrow = (name) => `Hello ${name}`;

console.log(greetUserArrow("John"));


// TODO: Use arrow functions with array methods.

let numbers = [1, 2, 3, 4, 5, 6];

// Use map() to create a new array with doubled values
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);


// Use filter() to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Use forEach() to print each number
numbers.forEach(num => {
    console.log(`Number: ${num}`);
});


// Use reduce() to calculate the total sum
let total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);