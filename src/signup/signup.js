import {Fet} from '../../modules/fetchAPI.js' 

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
    const data={
        userId : text_id,
        password: text_pw,
        email: text_email
    }
    const result = await Fet.post("auth/signup", JSON.stringify(data));
    console.log(result);

    if (result.statusCode==="201"){
        window.location.href = '../../index.html';
    }
    else{
        alert(result.message); 
    }
});


