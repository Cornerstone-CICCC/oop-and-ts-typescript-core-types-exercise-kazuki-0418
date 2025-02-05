"use strict";
// Exercise: Define a type `Person` with the following properties:
// - `firstName` (string)
// - `lastName` (string)
// - `age` (number)
// Then, create a function `greetPerson` that accepts a `Person` object and returns a greeting string:
// "Hello, [firstName] [lastName]! You are [age] years old."
function greetPerson(person) {
    return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}
console.log(greetPerson({ firstName: "John", lastName: "Doe", age: 30 }));
// Expected output: "Hello, John Doe! You are 30 years old."
