var lastName = 'Smith';
var anotherMultiply = function (a, b) {
    return a * b;
};
function anotherFirstName() {
    return firstName;
}
// declaring the type of function that myMultiplier can get
var myMultiplier;
// this will work
myMultiplier = anotherMultiply;
// this won't
// myMultiplier = anotherFirstName;
