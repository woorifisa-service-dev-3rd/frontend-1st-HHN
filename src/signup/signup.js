import {Fet} from '../../modules/fetchAPI.js' 
import { signup } from './signupapi.js';

const idBox = document.getElementsByClassName('id_box')[0];
const pwBox = document.getElementsByClassName('pw_box')[0];
const emailBox = document.getElementsByClassName('email_box')[0];


let text_id='';
idBox.addEventListener('input', (event) => {
    text_id= event.target.value;
});

let text_pw='';
pwBox.addEventListener('input', (event) => {
    text_pw = event.target.value;
});

let text_email='';
emailBox.addEventListener('input', (event) => {
    text_email = event.target.value;
});

document.getElementById('submitBtn').addEventListener('click', async function() {
    const awaitsignup = await signup(text_id, text_pw, text_email);
    if (awaitsignup.statusCode==="201"){
        window.location.href = '../../index.html';
    }
    else{
        alert(awaitsignup.message); 
    }
});


