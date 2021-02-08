let edad = parseInt(prompt('Cual es tu edad?'));

const Ingreso=(edad) => {
    if (edad === "") {
        alert("Ingresar tu edad");
    }
};

function MayorEdad(edad) {
    if (edad > 18) {
        alert("access allowed");
    } else {
        alert("access has been denied");
        console.log(MayorEdad)
    };
}

