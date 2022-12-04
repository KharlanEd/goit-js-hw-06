const inputSize = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputSize.addEventListener('input', styleInput)

function styleInput(evt) {
    const { value } = evt.currentTarget;
    spanText.style.fontSize = `${value}px`;
}