const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', () => {
    inputField.value.length == inputField.dataset.length ?
    inputField.classList.replace('invalid', 'valid') :
    inputField.classList.add('invalid');
});