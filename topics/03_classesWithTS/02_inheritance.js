var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = (function () {
    function Human(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
    }
    Human.prototype.printAge = function () {
        console.log(this.age);
        this.setHobby('Fencing');
    };
    Human.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
        console.log(this.occupation);
    };
    Human.prototype.setHobby = function (hobby) {
        console.log(hobby);
    };
    return Human;
}());
var GoodFella = (function (_super) {
    __extends(GoodFella, _super);
    function GoodFella(username, age) {
        var _this = _super.call(this, 'Robert', username) || this;
        _this.age = age;
        return _this;
    }
    return GoodFella;
}(Human));
var goodGuy = new GoodFella("robbie_44", 44);
console.log(goodGuy);
