// a private constructor
var ChosenOne = (function () {
    function ChosenOne(name) {
        this.name = name;
    }
    ChosenOne.getInstance = function () {
        if (!ChosenOne.instance) {
            ChosenOne.instance = new ChosenOne('Neo');
        }
        return ChosenOne.instance;
    };
    return ChosenOne;
}());
// let wrong = new ChosenOne('Neo');
var right = ChosenOne.getInstance();
