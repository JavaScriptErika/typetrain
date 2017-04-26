var MathHelpers;
(function (MathHelpers) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MathHelpers.calcCircumference = calcCircumference;
    function calcRectangle(width, length) {
        return width * length;
    }
})(MathHelpers || (MathHelpers = {}));
console.log(MathHelpers.calcCircumference(10));
/*
    Importing elsewhere:

    /// <reference path="01_namespaces.ts"/>

    console.log(MathHelpers.calcCircumference(44));

*/ 
