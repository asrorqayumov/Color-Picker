let color = document.getElementById("color");
let body = document.body;
let button = document.getElementById("addColor");
let HexCode = document.getElementById("result");

button.addEventListener("click", colorPicker);

function colorPicker() {
  body.style.backgroundColor = `${color.value}`;
  HexCode.innerText = color.value;
}
