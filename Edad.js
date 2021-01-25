let accessAllowed;
let edad = parseInt(prompt('Cual es tu edad?'));

function MayorEdad(){
if (edad == "") {
    alert ("Ingresar tu edad");
}else {
    if(edad >18){
        accessAllowed=true;
    }else {
        accessAllowed=false;
    }
}};
            
alert(accessAllowed);