// Below code creates an error at compile time instead of undefined at 
// at runtime because we don't have a name in the friend object
// we have a firstName

function greet(friend: {name: string}) {
    console.log("Hello ", + friend.name);
}

const friend = {
    firstName: "Max",
    age: 27
}

greet(friend);


// usage of interface keyword

interface PersonWithAName {
    firstName: string;

}

// to be continued ..