// Below code creates an error at compile time instead of undefined at 
// at runtime because we don't have a name in the friend object
// we have a firstName
function greet(friend) {
    console.log("Hello ", +friend.name);
}
var friend = {
    firstName: "Max",
    age: 27
};
greet(friend);
// to be continued .. 
