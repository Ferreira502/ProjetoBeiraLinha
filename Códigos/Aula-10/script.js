const display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function limparDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let resultado = eval(display.value);
        display.value = parseFloat(resultado.toFixed(4));
    } catch (e) {
        display.value = "Erro"
    }
}