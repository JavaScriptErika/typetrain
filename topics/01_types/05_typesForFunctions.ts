let firstName = 'Lev';

// declare type of returned value
function returnFirstName () :string {
    return firstName;
}
console.log(returnFirstName());

// declare types of args and returned values es5/6
function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(3,4));

const printMultiply = (a: number, b: number): number => {
    return a * b;
}

console.log(printMultiply(3,4));


// returns nothing, thus void
(function sayHello() :void {
    console.log('Hello');
})();

