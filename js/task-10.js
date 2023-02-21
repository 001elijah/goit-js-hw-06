function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input[type="number"]');

const btnCreate = document.querySelector('button[data-create]');

const btnDestroy = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('div#boxes');

function createBoxes(amount) {
  amount = input.value;
  let divStr = '';
  for (let i = 0; i < amount; i += 1) {
    divStr += `<div style="background-color: ${getRandomHexColor()}; width: ${30 + i * 10}px; height: ${30 + i * 10}px;"></div>`;
  };
  boxes.insertAdjacentHTML('beforeend', divStr);
};

function destroyBoxes(event) {
  boxes.innerHTML = '';
  input.value = '';
};

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);