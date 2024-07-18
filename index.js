import {Fet} from './modules/fetchAPI.js'

const idInput = document.getElementById('id-input');
const passInput = document.getElementById('pass-input');
const loginButton = document.getElementById('login-button');


let id = "";
let password = "";

idInput.addEventListener('input', (event) => {
    id = event.target.value;
})

passInput.addEventListener('input', (event) => {
    password = event.target.value;
})

loginButton.addEventListener('click', async(event) => {
    const data = {
        userId: id,
        password: password
    }
    const res = await Fet.post('auth/signin', JSON.stringify(data));
    console.log(res)
})
