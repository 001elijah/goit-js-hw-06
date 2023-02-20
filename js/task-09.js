function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.querySelector('span.color').textContent = body.style.backgroundColor;
}

const body = document.querySelector('body');

const button = document.querySelector('button.change-color');

button.addEventListener('click', getRandomHexColor);