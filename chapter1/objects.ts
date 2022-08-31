
//! objects
// return type of void because there is nothing being returned in this function.
const printName = (person: {first: string , last: string }): void =>{
console.log(`${person.first} ${person.last}`);
}

// actually printing the function
console.log(printName({first: 'Nelson', last: 'Guerra'}));

// setting up types on object literals
let coordinate: {x: number, y: number} = {x: 34, y: 2}

// we can do the same thing for functions, add an object type to a function
const funks = (): {x: number, y: number} => {
    return { x: 34, y: 20}
}
console.log(funks());

// Excess properties
printName({first: 'Nick', last: 'Cage'});


// !type alias
// creating a type alias to resuse in a function later on
type Point = {
    x: number,
    y: number
}

// creating the function and adding the Point alias as the type of the coord parameter and returning Point as a type
const randomCoordinate = (coord: Point): Point => {
return {x: coord.x * 5, y: coord.y * 10};
}

console.log(randomCoordinate({x: 20, y: 35}));

//! Nested Objects
// here we create the type alias
type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}
// here we can create an object that takes in the type alias of Song
const mySong: Song = {
    title: 'Faint',
    artist: 'Linkin Park',
    numStreams: 123456,
    credits: {
        producer: 'Chester Bennington',
        writer: 'Linkin Park'
    }
}

// taking the type alias as a type of the parameter song
const calculatePayout = (song: Song): number => {
return song.numStreams * 0.0033;
}

console.log('$'+ Math.floor(calculatePayout(mySong)));

console.log('hello');






