// nullable type

/*
    compiler will throw an error 
    "strictNullChecks": true
    in tsconfig.json
    -- by default it's set to false.
*/

let canBeNull = 12;
canBeNull = null;


// this is fine for the compiler

let mightBeNull: number | null = 12;
mightBeNull = null;

// this is also fine for the compiler

let canAlsoBeNull; // undefined
canAlsoBeNull = null;

// you're allowed to set null initially, but it won't be widened to other types
// it'll stay as a null type

let nullRightAway = null;
