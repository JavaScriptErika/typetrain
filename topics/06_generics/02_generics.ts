// Built-in Generics

const testResults: Array<number> = [ 2, 2.1, 4, 4, 1]
testResults.push(-2.99);

testResults.push("string"); // Getting compiler support  

// Arrays

function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["Apple", "Banana"])
printAll<string>([3, 4]); // Getting compiler support 

// Generic Types

function echoMachine<T>(data: T) {
    return data;
}

const echoTwo: <T>(data: T) => T = echoMachine;
