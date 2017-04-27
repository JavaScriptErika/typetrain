// Factory
function logged(constructorFn: Function) {
    console.log(constructorFn)
}

function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {

}