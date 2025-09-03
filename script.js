let display = document.getElementById("display");

// Append numbers/operators to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // evaluates the expression
    } catch (e) {
        display.value = "Error"; // in case of invalid input
    }
}
