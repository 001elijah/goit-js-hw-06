const inputField = document.querySelector('input#name-input');

const outputName = document.querySelector('#name-output');


function getInputText(event) {
    event.currentTarget.value === '' ?
    outputName.textContent = 'Anonymous' :
    outputName.textContent = event.currentTarget.value;
}
inputField.addEventListener('input', getInputText);