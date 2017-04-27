// creating a class decorator

// a decorator added to a class
// you can pass one argument and it's the constructor
function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class Student {
    constructor() {
        console.log('Hi');
    }
}
