const inputField = document.querySelector('#validation-input');

function checkInputLength(evt) {
    if (inputField.value.length != inputField.dataset.length) {
        if (inputField.classList.contains('valid')) {
            inputField.classList.remove('valid');
            inputField.classList.add('invalid')
        };
        inputField.classList.add('invalid');
    };
    if (inputField.value.length == inputField.dataset.length) {
        if (inputField.classList.contains('invalid')) {
            inputField.classList.remove('invalid');
            inputField.classList.add('valid')
        };
        inputField.classList.add('valid');
    };
};

inputField.addEventListener('blur', checkInputLength);