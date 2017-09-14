type operator = "+" | "-" | "*" | "/";

let calc = function (first: number, second: number, op: operator) {
    switch (op) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return Math.floor(first / second);
        default:
            return "whatever";
    }
}

console.log(calc(3, 5, "+"));

console.log(calc(24, 2581, "*"));