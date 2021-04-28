const hashing = {
    button: document.querySelector('.hash button'),
    input: document.querySelector('.hash input'), }
const checking = {
    button: document.querySelector('.check button'),
    inputHash: document.querySelector('.check input:first-of-type'),
    inputPassword: document.querySelector('.check input:nth-of-type(2)'), }
const output = document.querySelector('.output')

const bcrypt = require('bcrypt')

async function hash(password) {
    return bcrypt.hash(password, 12)
}

async function check(hash, password) {
    return bcrypt.compare(hash, password);
}

hashing.button.addEventListener('click', () => {
    hash(hashing.input.value)
        .then(value => output.innerHTML = value)
})

checking.button.addEventListener('click', () => {
    console.log(checking.inputPassword.value)
    console.log(checking.inputHash.value)
    check(checking.inputPassword.value, checking.inputHash.value)
        .then(value => output.innerHTML = value)
})