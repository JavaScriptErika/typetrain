const Greeter = (greeting: string) => {
    this.greeting = greeting;
}

Greeter.prototype.greet = () => "Hola " + this.greeting;

let greeter = new Greeter("James");
let button = document.createElement('button');

button.textContent = "Greet James";
button.onclick = () => alert(greeter.greet());

console.log('good to go.');
document.body.appendChild(button);