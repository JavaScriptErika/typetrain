// a private constructor
var TheOnlyOne = (function () {
    function TheOnlyOne(name) {
        this.name = name;
    }
    TheOnlyOne.getInstance = function () {
        if (!TheOnlyOne.instance) {
            TheOnlyOne.instance = new TheOnlyOne('Neo');
        }
        return TheOnlyOne.instance;
    };
    return TheOnlyOne;
}());
var someone = TheOnlyOne.getInstance();
// read-only will protect name: 
// someone.name = 'Lionel';
