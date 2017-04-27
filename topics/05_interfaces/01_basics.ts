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

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});