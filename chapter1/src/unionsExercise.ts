// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
highScore = 28;
highScore = true;
console.log(highScore);


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let things: number[] | string[] = [];
things = [28, 24];
console.log(things);


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

// needs to be formatted vertically like this
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

let mySkill: SkillLevel = "Expert";
console.log(mySkill);


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: SkillLevel
}

const newStudents: SkiSchoolStudent = {
    name: "Jason",
    age: 21,
    sport: 'snowboard',
    level: "Intermediate"
}

console.log(newStudents);



// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

// Create an array called colors that can hold a mixture of RGB and HSL color types
type rgbColor = {
    r: number;
    g: number;
    b: number;
};

type hslColor = {
    h: number;
    s: number;
    l: number;
}

const mixedColors: (rgbColor | hslColor)[] = [{r: 24, g: 25, b: 20}, {h: 10, s: 34, l: 21}]
console.log(...mixedColors);


// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greetHello = (word: string | string[]): void => {
if(typeof word === 'string' ){
console.log(`Hello, ${word}!`);
} 

for ( let i = 0; i < word.length; i++){
console.log(`Hello, ${word[i]}!`);
}
}

console.log(greetHello(['Nelson']));
console.log(greetHello(['Nelson', 'Rachel']));

