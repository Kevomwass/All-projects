const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    checkInput();
})

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue=== ''){

        setErrorFor(username, "Username cannot be blank");
    }
    else if (usernameValue.length < 6) {
        setErrorFor(username, "Username must be 6 character long");
    }
    else{
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.queryselector('small');

    small.innerText = "correct";

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formcontrol = input.parentElement;

    formcontrol.className = 'form-control success';
}