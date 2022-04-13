function calculate() {
    const getValue = document.getElementById("calculate_result").value;

    document.getElementById("calculate_result").value = eval(getValue);
}

function displayResult(value) {
    document.getElementById("calculate_result").value += value;
}

function clearScreen() {
    document.getElementById("calculate_result").value = "";
}