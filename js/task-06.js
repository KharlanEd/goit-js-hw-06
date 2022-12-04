const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(evt) {
    const { value } = evt.currentTarget;
    if (value.length < input.getAttribute('data-length')) {
        input.classList.add('invalid');
    
    } else input.classList.replace('invalid', 'valid');
    
}