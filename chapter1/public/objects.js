"use strict";
//! objects
// return type of void because there is nothing being returned in this function.
const printName = (person) => {
    console.log(`${person.first} ${person.last}`);
};
// actually printing the function
console.log(printName({ first: 'Nelson', last: 'Guerra' }));
// setting up types on object literals
let coordinate = { x: 34, y: 2 };
// we can do the same thing for functions, add an object type to a function
const funks = () => {
    return { x: 34, y: 20 };
};
console.log(funks());
// Excess properties
printName({ first: 'Nick', last: 'Cage' });
// creating the function and adding the Point alias as the type of the coord parameter and returning Point as a type
const randomCoordinate = (coord) => {
    return { x: coord.x * 5, y: coord.y * 10 };
};
console.log(randomCoordinate({ x: 20, y: 35 }));
// here we can create an object that takes in the type alias of Song
const mySong = {
    title: 'Faint',
    artist: 'Linkin Park',
    numStreams: 123456,
    credits: {
        producer: 'Chester Bennington',
        writer: 'Linkin Park'
    }
};
// taking the type alias as a type of the parameter song
const calculatePayout = (song) => {
    return song.numStreams * 0.0033;
};
console.log('$' + Math.floor(calculatePayout(mySong)));
// creating a variable that holds this new object
const happyFace = {
    radius: 4,
    color: 'Blue'
};
console.log(happyFace);
const Luna = {
    numLives: 1,
    breed: 'Labrador',
    age: 10
};
console.log(Luna);
// 
