function loggee(constructorFn: Function) {
    console.log(constructorFn)
}

function logger(value: boolean) {
    return value ? loggee: null;
}

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logger(true)
@printable
class Animal {
    name = "Tiger";
}

const animal = new Animal();
(<any>animal).print();