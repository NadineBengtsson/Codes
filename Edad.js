let edad = parseInt(prompt('Cual es tu edad?'));

function MayorEdad(edad) {
    if (edad == "") {
        alert("Ingresar tu edad");
        if (edad > 18) {
            alert("accessAllowed");
        } else {
            alert("accessAllowed denied");
        };
    }
}

console.log(edad);
console.log(MayorEdad);
