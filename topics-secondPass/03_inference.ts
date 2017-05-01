let x = 3; // inference => number
let y; // inference => any
let middleName = 'Trevor'; // inference => string

let num1 = 100;
let num2: number = 20;

const addNumbers = (n1: number, n2: number, n3: number) => {
    let result = n1 + n2 + n3;
    let msg = `Sum is ${result}`;
    console.log(msg);
}

addNumbers(5, 6, 7);
addNumbers(num1, num2, 7);

