// TODO: Create a function called ‘multiply’ that will take in 3 parameters
// and multiply all 3 numbers together.
// Note: The argument passed must NOT be the same number.

function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Numbers must not be the same";
    }

    return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));
console.log(multiply(5, 5, 2));


// TODO: Create a function expression called ‘convertToSeconds’
// that takes in a number of minutes as an argument
// and returns the amount in seconds.

const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));


// TODO: Create a function called fahrenheitToCelsius
// that takes the temperature as a parameter
// and returns the equivalent temperature in Celsius.

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(77));


// TODO: Create a function that takes a string as a parameter
// and returns the reverse of the string.

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));


// TODO: Create a function that takes in a string
// and returns the number of vowels in the sentence.

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript"));


// TODO: Create an 'isPrime' function that takes a number as a parameter
// and returns true if the number is prime, and false otherwise.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Testing with 4 numbers
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(15));