function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += " " + operator + " ";
}

function appendDot() {
    document.getElementById("display").value += ".";
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    display.value = eval(display.value.replace(/ /g, ''));
}

function changeMode() {
    document.querySelector(".calculator").innerHTML = 'hi';
}