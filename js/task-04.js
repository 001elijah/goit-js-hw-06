const btnDecrement = document.querySelector('button[data-action="decrement"]');

const counter = document.querySelector('#value')

const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function handleClickDecrement(event) {
    counterValue -= 1;
    counter.textContent = counterValue;
};
function handelClickIncrement(event) {
    counterValue += 1;
    counter.textContent = counterValue;
};

btnDecrement.addEventListener('click', handleClickDecrement);
btnIncrement.addEventListener('click', handelClickIncrement);