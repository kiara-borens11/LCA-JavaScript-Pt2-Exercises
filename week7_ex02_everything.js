// TODO: Create a function called sum.
// The function will take in a parameter and calculate all the
// numbers from 0 to the parameter.

function sum(num) {

    // Check if the value is a number and an integer
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Testing the function
console.log(sum(5));      // 15
console.log(sum(10));     // 55
console.log(sum("hello")); // Error message
console.log(sum(4.5));    // Error message


// TODO: Create a function called 'factorial'

function factorial(num) {

    let result = 1;
    let calculation = "";

    for (let i = num; i >= 1; i--) {
        result *= i;

        calculation += i;

        if (i !== 1) {
            calculation += " * ";
        }
    }

    console.log(calculation + " = " + result);
}

factorial(4);
factorial(5);


// TODO: Create a function called funkyMath

function funkyMath(a, b, c, d) {

    // 2 arguments
    if (arguments.length === 2) {
        return a - b;
    }

    // 3 arguments
    else if (arguments.length === 3) {
        return a + b + c;
    }

    // 4 arguments
    else if (arguments.length === 4) {
        return (a + b) / (c + d);
    }

    else {
        return "Invalid number of arguments";
    }
}

// Testing funkyMath
console.log(funkyMath(10, 5));        // 5
console.log(funkyMath(2, 3, 4));      // 9
console.log(funkyMath(8, 2, 3, 5));   // 1.25


// TODO: Create a loop that removes all odd numbers
// from the array and adds them to a new array.

let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    } else {
        evenNumbers.push(numbers[i]);
    }
}

// Arrange odd numbers from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);


// TODO: Create an object called 'me'

let me = {
    firstName: "Kiara",
    lastName: "Borens",
    age: 20,
    favouriteColour: "Blue",
    dreamCar: "BMW"
};

console.log(me);


// TODO: Add a new property called 'favourite food'

me.favouriteFood = "Pizza";

console.log(me);


// TODO: Delete the age property from the object

delete me.age;

console.log(me);