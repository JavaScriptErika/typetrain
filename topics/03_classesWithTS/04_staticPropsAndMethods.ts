class Helpers {
    static PI: number = 3.14;
    static calcCircumfurence(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumfurence(8));
