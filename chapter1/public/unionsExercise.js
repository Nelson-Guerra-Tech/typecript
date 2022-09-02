"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
highScore = 28;
highScore = true;
console.log(highScore);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let things = [];
things = [28, 24];
console.log(things);
let mySkill = "Expert";
console.log(mySkill);
const newStudents = {
    name: "Jason",
    age: 21,
    sport: 'snowboard',
    level: "Intermediate"
};
console.log(newStudents);
const mixedColors = [{ r: 24, g: 25, b: 20 }, { h: 10, s: 34, l: 21 }];
console.log(...mixedColors);
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greetHello = (word) => {
    if (typeof word === 'string') {
        console.log(`Hello, ${word}!`);
    }
    for (let i = 0; i < word.length; i++) {
        console.log(`Hello, ${word[i]}!`);
    }
};
console.log(greetHello(['Nelson']));
console.log(greetHello(['Nelson', 'Rachel']));
