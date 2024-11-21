const lform = document.getElementById('lform');
const email = document.getElementById('email');
const password = document.getElementById('password');
const continueBtn = document.getElementById('continue-btn');
const cadastroBtn = document.getElementById('cadastro-btn');

lform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value;
    const passwordValue = password.value;

    let formIsValid = true;

    if (emailValue === '') {
        setErrorFor(email, 'Este campo é obrigatório.');
        formIsValid = false;
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido.');
        formIsValid = false;
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Este campo é obrigatório.');
        formIsValid = false;
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.');
        formIsValid = false;
    } else {
        setSuccessFor(password);
    }

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
}

 function setErrorFor(linput,message) {
    const linputBox = linput.parentElement;
    const small = linputBox.querySelector('small');
    small.innerText = message;
    linputBox.className = 'linput-box error';
 
 }
 
 function setSuccessFor(linput) {
     const linputBox = linput.parentElement;
     linputBox.className = 'linput-box success';
 }
 
 function checkEmail(email) {
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
       email
     );
   }


   continueBtn.addEventListener('click', () => {
    checkInputs();

    
    if (document.querySelectorAll('.linput-box.success').length === 2) {
        window.location.href = 'index.html'; 
    }
});

cadastroBtn.addEventListener('click', () => {
    checkInputs();

    
    if (document.querySelectorAll('.linput-box.success').length === 2) {
        window.location.href = 'cadastro.html';  
    }
});