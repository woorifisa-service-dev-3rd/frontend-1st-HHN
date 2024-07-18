import {Fet} from './modules/fetchAPI.js'

const idInput = document.getElementById('id-input');
const passInput = document.getElementById('pass-input');
const loginButton = document.getElementById('login-button');


let id = "";
let password = "";

function isValid(id, password) {
    if (id&&password) {
        loginButton.style.backgroundColor = "#3F66FB";
        loginButton.style.color = "white";
    } else {
        loginButton.style.backgroundColor = "#CFD8FE";
        loginButton.style.color = "black";
    }
}

idInput.addEventListener('input', (event) => {
    id = event.target.value;
    isValid(id, password);
})

passInput.addEventListener('input', (event) => {
    password = event.target.value;
    isValid(id, password);
})

loginButton.addEventListener('click', async(event) => {
    const data = {
        userId: id,
        password: password
    }
    const res = await Fet.post('auth/signin', JSON.stringify(data));
    if(res.statusCode === 201) {
        window.location.href = "./home.html";
    }
    else {
        window.alert(res.message);
    }
})

const toSignUp = document.getElementById('to-signup');

toSignUp.addEventListener('click', () => {
    window.location.href = "./src/signup/signup.html"
})
