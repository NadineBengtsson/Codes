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
            

