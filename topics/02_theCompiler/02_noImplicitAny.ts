// anything is implicitly set to type any.
let anything;

// so this works
anything = 12;


// to change this behaviour, set:
// {
//     "compilerOptions": {
//         "noImplicitAny": true,
//     }
// }