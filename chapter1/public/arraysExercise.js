"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [28, 28, 16, 19];
console.log(ages);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [['Nelson'], ['Rachel']];
console.log(gameBoard[0], gameBoard[1]);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const iPhone = {
    name: 'iPhoneX',
    price: 1000
};
const macbook = {
    name: 'iPhoneX',
    price: 2000
};
// function to add the prices together
const getTotal = (products) => {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
};
// remember that it takes in an array
console.log(getTotal([iPhone, macbook]));
