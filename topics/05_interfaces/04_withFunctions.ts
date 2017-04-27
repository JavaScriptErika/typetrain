// Interface with Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let doubleFunction: DoubleValueFunc;
doubleFunction = (val1: number, val2: number) => {
    return val1 + val2;
}

console.log(doubleFunction(2, 2));
