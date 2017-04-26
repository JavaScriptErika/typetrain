var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumfurence = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumfurence(8));
