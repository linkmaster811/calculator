const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let x = ''
let y = ''
let operator = ''
function operate(x, y, operator) {
    if(operator = '+') {
        add;
    } else if(operator = '-') {
        subtract;
    } else if(operator = '*') {
        multiply;
    } else {
        divide;
    }
}

function updateDisplay(){
    document.getElementById("display").innerHTML = x;
}