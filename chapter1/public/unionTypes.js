"use strict";
// Basic Union Type:
let aged = 21;
aged = 23;
aged = "24";
// Union type with type aliases
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// Function parameter union type:
function printAge(age) {
    console.log(`You are ${age} years old`);
}
const agePrint = (age) => {
    console.log(`You are ${age} years old`);
};
console.log(agePrint(28));
// type narrowing, where we can have a conditional statement to check if the parameter is a number or a string
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax('100', .2));
// const nums: number[] = [1,2,3,4]
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]
// const stuff: (number | string)[] = [1,2,3, "das"]
// const stuff: number[] | string[] = ["asd", "asd", 1]
// adding more than one type to an array. But does not hold all types
const stuff = [];
// Union Type With Arrays
const coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });
// Literal Types
let zero = 0;
let mood = "Happy";
mood = "Sad";
let today = "Sunday";
