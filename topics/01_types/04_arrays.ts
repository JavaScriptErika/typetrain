// unexplicit initiation - you cannot add other types in the array
// because it's initialized as string in this example
let hobbies = ["Running", "Fencing"];

// explicit declaration

let interests: any[] = ["Cooking", "Sports", 42];
let favouriteNumbers: number[] = [42, 77, 13];
let statusChecks: boolean[] = [false, false, true];
console.log(`
    ${interests}
    ${favouriteNumbers}
    ${statusChecks}
`);

// tuples! order is important!

let address: [string, number] = ["Fastlane St.", 21];
console.log(`
    ${address}
`);

