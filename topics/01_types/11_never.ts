// never type
// it never returns although not void because it returns an error

function neverReturns(): never {
    throw new Error('An error!')
}