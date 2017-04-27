// simple generic reasoning

function echo(data: any) {
    return data;
}

console.log(echo("Max").length); // All good
console.log(echo(27).length); // We got problems

// a better way - informing TypeScript and getting warned

function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length); // All good
console.log(betterEcho(27).length); // We got IDE warnings and compilation error!
console.log(betterEcho<number>("27")); // We got IDE warnings and compilation error!
