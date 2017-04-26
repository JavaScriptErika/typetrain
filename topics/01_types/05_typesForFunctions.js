var firstName = 'Lev';
// declare type of returned value
function returnFirstName() {
    return firstName;
}
console.log(returnFirstName());
// declare types of args and returned values es5/6
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
var printMultiply = function (a, b) {
    return a * b;
};
console.log(printMultiply(3, 4));
// returns nothing, thus void
(function sayHello() {
    console.log('Hello');
})();
