// var buttonPlus = document.getElementById("buttonPlus");
// var buttonMinus = document.getElementById("buttonMinus");
// var buttonMultiply = document.getElementById("buttonMultiply");
// var buttonDevide = document.getElementById("buttonDevide");

// var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

var operationButtons = document.getElementsByClassName("operation-button");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperations(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  if (operationCode === "+") {
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  } else {
    window.alert("operation is not unknown");
  }
  window.alert(result);
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperations(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", onOperationButtonClick);
}
