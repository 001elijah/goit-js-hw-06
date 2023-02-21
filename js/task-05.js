const inputField = document.querySelector('input#name-input');

const outputName = document.querySelector('#name-output');


function getInputText(event) {
    // event.currentTarget.value === '' ?
    // outputName.textContent = 'Anonymous' :
    // outputName.textContent = event.currentTarget.value;
    outputName.textContent = event.currentTarget.value ?
    event.currentTarget.value :
    'Anonymous';
}
inputField.addEventListener('input', getInputText);