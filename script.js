const screen = document.getElementById("screen")

let numb;
let output;
let operator;

let numbers = [];

function add(sign) {
    if (screen.value === "0") {
        screen.value = sign;
    } else {
        screen.value += sign;
    }
}

function operation(type){
    const current = parseFloat(screen.value);

    if (numbers.length === 0) {
        numbers.push(current);
    } else {
        const result = calculate(numbers[0], current, operator);
        numbers[0] = result;
        screen.value = result;
    }
    operator = type;
    screen.value = "";
}

function calculate(a, b, op){
    switch(op){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a/b : "You can't divide by 0!";
    }
}

function equal() {
    if (numbers.length === 0 || screen.value === "") return;

    const result = calculate(numbers[0], parseFloat(screen.value), operator);
    screen.value = result;
    numbers = [];
    operator = null;
}

function clearScreen() {
    screen.value = "";
    numbers = [];
    operator = null;
}
