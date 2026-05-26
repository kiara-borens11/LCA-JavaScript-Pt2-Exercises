// TODO: Create a function that validates user input.

function validateUserInput(name, age) {

    try {

        if (typeof name !== "string" || name.trim() === "") {
            throw "Invalid name entered";
        }

        if (typeof age !== "number" || age <= 0) {
            throw "Invalid age entered";
        }

        console.log("User input is valid");

    } catch (error) {

        console.log("Error:", error);

    }
}

// Testing the function
validateUserInput("Kiara", 20);
validateUserInput("", 20);
validateUserInput("John", -5);


// TODO: Create a function that demonstrates multiple error types.

function multipleErrors(value) {

    try {

        // Type Error
        if (typeof value !== "number") {
            throw new TypeError("Value must be a number");
        }

        // Range Error
        if (value < 1 || value > 100) {
            throw new RangeError("Value must be between 1 and 100");
        }

        // Custom Error
        if (value === 50) {
            throw "The value 50 is not allowed";
        }

        console.log("Value accepted:", value);

    } catch (error) {

        console.log("Error:", error);

    }
}

// Testing the function
multipleErrors("hello");
multipleErrors(150);
multipleErrors(50);
multipleErrors(25);


// TODO: Create a collection of helper functions for string manipulation.

// Convert string to uppercase
function toUpperCaseString(str) {
    return str.toUpperCase();
}

// Convert string to lowercase
function toLowerCaseString(str) {
    return str.toLowerCase();
}

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count characters in a string
function countCharacters(str) {
    return str.length;
}

// Testing string helper functions
console.log(toUpperCaseString("javascript"));
console.log(toLowerCaseString("JAVASCRIPT"));
console.log(reverseString("Frontend"));
console.log(countCharacters("Life Choices"));


// TODO: Create helper functions for array operations.

// Get the largest number in an array
function getLargestNumber(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Get the smallest number in an array
function getSmallestNumber(arr) {

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// Sum all numbers in an array
function sumArray(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// Remove duplicates from an array
function removeDuplicates(arr) {

    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Testing array helper functions
let numbers = [2, 4, 6, 8, 8, 10, 2];

console.log(getLargestNumber(numbers));
console.log(getSmallestNumber(numbers));
console.log(sumArray(numbers));
console.log(removeDuplicates(numbers));