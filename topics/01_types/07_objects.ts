// this is unexplicit but behind the scenes TS infers the type 
// it's an object, name with string, age with number
// and the names of the properties are important as well!

let userData = {
    name: 'Jane',
    age: 24
};

/* Important
    In functions the order of types matter, not the names of the arguments
    With objects the name of properties are important not the order

    Example: 
    Types match but property names don't match 
userData = {
    a: 'Hello',
    b: 22
};
    You'll get an error.
*/


// Explicit type definitions

let myObject: { username: string, age: number } = {
    username: "smiley",
    age: 32
}

// complex example #1

let complexObject: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3,22, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
};

/* Breakdown of complexObject
    is an Object
    with a property named data, which has a key 
*/