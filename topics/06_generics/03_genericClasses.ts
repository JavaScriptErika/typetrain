// Generic Classes

class SimpleMath<T extends number> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number>();
simpleMath.multiplyValue = 20;
simpleMath.baseValue = "string"; // gets warning from compiler
simpleMath.baseValue = 10;

console.log(simpleMath.calculate());


class UnionMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const unionMath = new UnionMath<string, number>();
unionMath.baseValue = "10"; // gets warning from compiler
unionMath.multiplyValue = 30;
console.log(unionMath.calculate());


