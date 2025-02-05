"use strict";
// Exercise: Write a function `fail` that takes a string message and throws an error with that message.
// The function should have a `never` return type because it never successfully returns.
console.log(fail("Something went wrong"));
// Expected output: Uncaught Error: Something went wrong
function fail(message) {
    throw new Error(message);
}
