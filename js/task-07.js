const fontSizeControl = document.querySelector('input#font-size-control');
const textSmaple = document.querySelector('span#text');

fontSizeControl.addEventListener('input', () => {
    textSmaple.style.fontSize = `${fontSizeControl.value}px`;
});