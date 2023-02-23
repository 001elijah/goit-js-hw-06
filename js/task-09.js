const body = document.body;

const button = document.querySelector('button.change-color');

const output = document.querySelector('span.color');//вивів у змінну

let randomColor = '';

function getRandomHexColor() {
  randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function applyRandomColor() {
  getRandomHexColor();
  body.style.backgroundColor = randomColor;
  output.textContent = randomColor;
}

button.addEventListener('click', applyRandomColor);