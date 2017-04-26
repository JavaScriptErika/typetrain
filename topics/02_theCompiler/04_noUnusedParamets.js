function secondController(isTrue, isValid) {
    var result;
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
