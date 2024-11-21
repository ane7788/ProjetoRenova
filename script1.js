const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const numberValue = number.value;
    const passwordValue = password.value;
    const cpasswordValue = cpassword.value;

    if (firstnameValue === '') {
        setErrorFor(firstname, 'Este campo é obrigatório.');
    } else {
        setSuccessFor(firstname);
    }
    
    if (lastnameValue === '') {
        setErrorFor(lastname, 'Este campo é obrigatório.');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Este campo é obrigatorio.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido');
    } else {
        setSuccessFor(email);
    }

    if (numberValue === '') {
        setErrorFor(number, 'Este campo é obrigatório.');
    } else {
        setSuccessFor(number);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Este campo é obrigatório.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if (cpasswordValue === '') {
        setErrorFor(cpassword, 'Este campo é obrigatório.');
    } else if (cpasswordValue !== passwordValue) {
        setErrorFor(cpassword, 'Senha incorreta.');
    } else {
        setSuccessFor(cpassword);
    }

    const inputBox = form.querySelectorAll(".input-box");
    const formIsValid = [...inputBox].every((inputBox) => {
    return inputBox.className === "input-box success";
    });
    if (formIsValid) {
        console.log("O formulário está 100% válido!");
        form.submit();
  }
}

function setErrorFor(input,message) {
   const inputBox = input.parentElement;
   const small = inputBox.querySelector('small');
   small.innerText = message;
   inputBox.className = 'input-box error';

}

function setSuccessFor(input) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }