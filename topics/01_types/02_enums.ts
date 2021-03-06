// enum

enum Color {
    Tomato,
    Cyan,
    Hazel,
    Black = 100,
    White,
}

let myColor: Color = Color.Hazel;
console.log(`
    value of that color is ${myColor}
`);

/* The code above compiles to:
var Color;
(function (Color) {
    Color[Color["Tomato"] = 0] = "Tomato";
    Color[Color["Cyan"] = 1] = "Cyan";
    Color[Color["Hazel"] = 2] = "Hazel";
    Color[Color["Black"] = 100] = "Black";
    Color[Color["White"] = 101] = "White";
})(Color || (Color = {}));
var myColor = Color.Hazel;
console.log("\n    value of that color is " + myColor + "\n");
*/