const lastName = 'Smith';

const anotherMultiply = (a: number, b: number): number => {
    return a * b;
}

function anotherFirstName () :string {
    return firstName;
}

// declaring the type of function that myMultiplier can get
let myMultiplier: (a: number, b: number) => number;
// this will work
myMultiplier = anotherMultiply;
// this won't
// myMultiplier = anotherFirstName;
