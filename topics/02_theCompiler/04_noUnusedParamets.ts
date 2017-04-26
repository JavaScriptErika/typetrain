function secondController(isTrue: boolean, isValid: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    return result;
}

// Above code will throw an error due to isValid being an unused parameter
// if the settings are :

// {
//     "compilerOptions": {
//         "noUnusedParameters": true
//     }
// }