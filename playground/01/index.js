var _this = this;
var Greeter = function (greeting) {
    _this.greeting = greeting;
};
Greeter.prototype.greet = function () { return "Hola " + _this.greeting; };
var greeter = new Greeter("James");
var button = document.createElement('button');
button.textContent = "Greet James";
button.onclick = function () { return alert(greeter.greet()); };
console.log('good to go.');
document.body.appendChild(button);
