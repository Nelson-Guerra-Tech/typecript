var rounding = Math.round(4.5);
console.log(rounding);
// you can assign types to the objects in typescript
var movieTitle = 'Tarzan';
console.log(movieTitle);
// Type Inference
var theName = 'Nelson';
var age = 28;
theName = 'Superman';
console.log(theName);
// Any type, is an escape, it turns off type checking for this variable so you can do your thing. 
// any type can be changed to whatever you want, so you dont want to use it a lot of the times but there are places where you can use it.
var animal = 'Orca';
animal = true;
animal = 28;
animal = [29, 'Nelson', true];
animal = { name: 'Willy' };
// functions with type
var funk = function (num) {
    return num * num;
};
console.log(funk(2));
var greetings = function (person) {
    if (person === void 0) { person = 'Stranger'; }
    console.log("This is ".concat(person));
};
greetings('Nelson');
// using the return type to a function, after the parenthesis.
// TS can guess the type of the return of a function is the parameters are of one type
var addNums = function (x, y) {
    return x * y;
};
var colored = ['red', 'orange', 'yellow'];
colored.map(function (color) {
    return color.toUpperCase();
});
console.log(colored);
