
//simulador interactivo - formulario de contacto

const form = document.querySelector("#info");
const email = document.querySelector("#Mail");
const emailHelp = document.querySelector("#emailHelp");
const requiredFields = [
    {input: email,message: 'Email is required'}
];


form.addEventListener("submit", (event) => {

    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });

    if (valid) {
        valid = validateEmail(email)
    } else if (!valid) {
            event.preventDefault();
    };
    
    if (email.value === " ") {
        if (email.value === " "){
            emailHelp.innerText = "Por favor, completar mail"
        }  else {
        form.submit();}};

});
