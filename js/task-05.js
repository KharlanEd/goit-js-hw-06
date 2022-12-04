const input = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output')
input.addEventListener('input', onInput)
function onInput(evt) {
    const { value } = evt.currentTarget
    nameSpan.textContent = value;
    if(value === '')
   nameSpan.textContent = 'Anonymous'
}
