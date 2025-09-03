function appendValue(val) {
  document.getElementById("display").value += val;
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
