let accessAllowed;
let edad = parseInt(prompt('Cual es tu edad?'));

const MayorEdad =() => {
    if (edad == "") {
        alert ("Ingresar tu edad");
    } else {
        if(edad >18){
            accessAllowed=true;
        } else {
            accessAllowed=false;
        }
    }};
    
    alert(accessAllowed);

let proyectos = ["Oftanmologia", "Oncologia", "Schizophrenia", "Diabetes"]

    for (let proyecto = 0; proyecto < 5; proyecto++) {
      if (proyecto === 0) {
        continue;
      } 
      proyecto = proyecto + i;
    }
    
    console.log(proyecto);

// desafio complementario 

let Descuento = (0.50);

const suma = (a,b) => {a + b};

const resta = (a,b) => {a - b};

const iva = (x) => x * (0.21);

let precioProducto = 15.000; //carito el producto jaja

let precioDescuento = (precioProducto * Descuento)

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);

console.log(nuevoPrecio)


//simulador interactivo

const form = document.querySelector("#info")
const email = document.querySelector("#Mail")
const emailHelp = document.querySelector("#emailHelp")
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



// objetos

const Usuarios = () => {
    {nombre: Marcela;
    id: 1;
    puesto: Fundadora;}
    {nombre: Nadine;
    id: 2;
    puesto: Dev;}
    {nombre: John;
    id: 3;
    puesto: Autorizado;}
};

class Usuario {
    constructor (nombre, id, puesto) {
        this.nombre = nombre;
        this.id = id;
        this.puesto = puesto;
    }

    nuevoUsuario (onAdd) {
        console.log("Hola nuevo usuario " + this.nombre)
    }
}

const Usuario4 = new Usuario ({nombre: "Christian", id: 5, puesto: contable}); 

