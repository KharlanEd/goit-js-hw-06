const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены')
    } const userDetails = { Email: email.value, Password: password.value }
    evt.currentTarget.reset();
    console.log(userDetails);
    
}
