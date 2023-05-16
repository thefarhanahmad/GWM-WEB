console.log("hello world");

let display = document.querySelector("#display");
let key_value = document.querySelectorAll(".key-value");

function calculate() {
  if (display.value != "") {
    display.value = eval(display.value);
  }
}
