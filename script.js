const form = document.querySelector('form')
const pass = document.getElementById('pass');
const cPass = document.getElementById('cpass');
const button = document.querySelector('button')

form.addEventListener('input', () => {
    if (pass.value !== cPass.value) {
        return form.customError('The passwords should match');
    }
})
