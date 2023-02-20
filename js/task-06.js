const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', () => {
    inputField.value.length > inputField.dataset.length ?
    inputField.classList.add('invalid') :
    inputField.classList.add('valid');
});