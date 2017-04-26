function controller(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    return result;
}
// Above code doesn't throw an error because if result is not initialized, it's null
// and the default settings are ok with that.
// but if strictNullChecks are true, you get an error
//  "Variable 'result' is used before being assigned.""
// {
//     "compilerOptions": {
//         "strictNullChecks": true
//     }
// } 
