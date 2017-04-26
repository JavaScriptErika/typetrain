// create type alias
type Complex = {
    data: number[],
    output: (all: boolean) => number[]
}

let complexObjectTwo: Complex = {
    data: [100, 3,22, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
};