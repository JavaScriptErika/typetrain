// define contract

interface NamedFriend {
    firstName: string;
    age: number;
}

function greet(friend: NamedFriend) {
    console.log("Hello ", + friend.firstName);
}

const friend = {
    firstName: "Max",
    age: 27
}

// valid
greet({firstName: 'John'});
// invalid - can't pass unknown properties with object literals unless age is optional
greet({firstName: 'John', age: 26}); 

// if interface declares age as optional, then the above line would work

interface NamedFriend {
    firstName: string;
    age?: number;
}

// if you don't know the name of the property at the time of creation

interface NamedFriend {
    firstName: string;
    age?: number;
    [propName: string]: any
}
