const body = document.body;

const button = document.querySelector('button.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function spanColorCode() {
  document.querySelector('span.color').textContent = body.style.backgroundColor;
}

function applyRandomColor(event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorCode();
}

button.addEventListener('click', applyRandomColor);