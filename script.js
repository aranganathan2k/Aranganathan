let display = document.getElementById("display");

// Append numbers/operators
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); 
  } catch (e) {
    display.value = "Error";
  }
}
