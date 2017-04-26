// available properties and patterns
var Person = (function () {
    // constructor will also create and assign public username
    function Person(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setHobby('Fencing');
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
        console.log(this.occupation);
    };
    Person.prototype.setHobby = function (hobby) {
        console.log(hobby);
    };
    return Person;
}());
var person = new Person("Max", "max_11");
console.log(person.name, person.username);
// person.printAge();
person.setOccupation("Athlete");
