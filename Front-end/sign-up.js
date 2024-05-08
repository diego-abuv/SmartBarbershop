const form = document.querySelector('#cadastro')

form.addEventListener('submit', event => {
    event.preventDefault();

    const user = document.querySelector('#username-input')
    const email = document.querySelector('#email-input')
    const password = document.querySelector('#password-input')

    console.log(user.value)
    console.log(email.value)
    console.log(password.value)
})
 console.log(form)