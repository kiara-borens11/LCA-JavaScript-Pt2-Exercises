// TODO: Create a global variable called globalCount.

let globalCount = 10;


// TODO: Create a function that demonstrates local scope.

function localScopeExample() {

    // Local variable
    let localCount = 5;

    console.log("Inside function:");
    console.log("Global Count:", globalCount);
    console.log("Local Count:", localCount);
}

localScopeExample();


// TODO: Create a function that tries to modify both variables.

function modifyVariables() {

    // Modify global variable
    globalCount += 5;

    // Local variable
    let localCount = 20;

    // Modify local variable
    localCount += 10;

    console.log("Modified Global Count:", globalCount);
    console.log("Modified Local Count:", localCount);
}

modifyVariables();

console.log("Global Count Outside Function:", globalCount);


// TODO: Create a Student constructor function.

function Student(firstName, lastName, age, course) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;

    // Method
    this.introduce = function() {
        console.log(
            "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            " and I study " +
            this.course
        );
    };
}


// TODO: Create several student instances.

let student1 = new Student("Kiara", "Borens", 20, "Frontend Development");
let student2 = new Student("John", "Smith", 22, "Cybersecurity");
let student3 = new Student("Sarah", "Williams", 19, "Data Science");

console.log(student1);
console.log(student2);
console.log(student3);

student1.introduce();
student2.introduce();
student3.introduce();


// TODO: Create an object literal with nested properties.

let person = {

    firstName: "Kiara",
    lastName: "Borens",

    address: {
        street: "123 Main Road",
        city: "Durban",
        country: "South Africa"
    },

    hobbies: {
        indoor: "Reading",
        outdoor: "Swimming"
    }
};

console.log(person);

console.log(person.address.city);
console.log(person.hobbies.indoor);