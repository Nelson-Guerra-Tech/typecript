//! objects
// return type of void because there is nothing being returned in this function.
var printName = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
// actually printing the function
console.log(printName({ first: 'Nelson', last: 'Guerra' }));
// setting up types on object literals
var coordinate = { x: 34, y: 2 };
// we can do the same thing for functions, add an object type to a function
var funks = function () {
    return { x: 34, y: 20 };
};
console.log(funks());
// Excess properties
printName({ first: 'Nick', last: 'Cage' });
// creating the function and adding the Point alias as the type of the coord parameter and returning Point as a type
var randomCoordinate = function (coord) {
    return { x: coord.x * 5, y: coord.y * 10 };
};
console.log(randomCoordinate({ x: 20, y: 35 }));
// here we can create an object that takes in the type alias of Song
var mySong = {
    title: 'Faint',
    artist: 'Linkin Park',
    numStreams: 123456,
    credits: {
        producer: 'Chester Bennington',
        writer: 'Linkin Park'
    }
};
// taking the type alias as a type of the parameter song
var calculatePayout = function (song) {
    return song.numStreams * 0.0033;
};
console.log('$' + Math.floor(calculatePayout(mySong)));
// creating a variable that holds this new object
var happyFace = {
    radius: 4,
    color: 'Blue'
};
console.log(happyFace);
var Luna = {
    numLives: 1,
    breed: 'Labrador',
    age: 10
};
console.log(Luna);
// 
