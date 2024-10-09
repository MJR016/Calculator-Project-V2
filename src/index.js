import { evaluate } from "mathjs";

const display = document.getElementById("calculator-display");
var restrictedSymbols = ["+", "-", "*", "/", "="];

function validate(symbol) {
  if (restrictedSymbols.includes(symbol.charAt(0)) && symbol.charAt(0) != "-") {
    display.value = "";
  } else if (
    symbol.length >= 2 &&
    restrictedSymbols.includes(symbol.charAt(symbol.length - 1)) &&
    restrictedSymbols.includes(symbol.charAt(symbol.length - 2))
  ) {
    if (
      symbol.length >= 3 &&
      symbol.charAt(symbol.length - 1) == "-" &&
      symbol.charAt(symbol.length - 2) == "-" &&
      symbol.charAt(symbol.length - 3) == "-"
    ) {
      display.value = "ERROR";
    } else if (symbol.charAt(0) == "-" && symbol.charAt(0) == "-") {
      display.value = "ERROR";
    } else if (symbol.charAt(symbol.length - 1) == "-") {
      //do nothing...
    } else {
      display.value = "ERROR";
    }
  } else {
    //do nothing...
  }
}

window.retrieve = function (input) {
  if (display.value == "ERROR") {
    display.value = "";
    display.value += input;
    validate(display.value);
  } else {
    display.value += input;
    validate(display.value);
  }
};

window.remove = function () {
  display.value = "";
};

window.calculate = function () {
  if (
    restrictedSymbols.includes(
      display.value.charAt(display.value.length - 1)
    ) ||
    display.value == "ERROR"
  ) {
    display.value = "ERROR";
  } else {
    display.value = evaluate(display.value);
  }
};
