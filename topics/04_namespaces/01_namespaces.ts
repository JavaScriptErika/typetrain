namespace MathHelpers {
    const PI = 3.14;

    export function calcCircumference(diameter: number) {
        return diameter * PI;
    }
    
    function calcRectangle(width: number, length: number) {
        return width * length;
    }
}

console.log(MathHelpers.calcCircumference(10));


/*
    Importing elsewhere: 

    /// <reference path="01_namespaces.ts"/> 

    console.log(MathHelpers.calcCircumference(44));

*/