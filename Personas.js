
// objetos

const Usuarios = () => {
    {nombre: John;
    id: 1;
    mail: 'john59@yahoo.com';
    interest: "Regulatory advise"}
    {nombre: Marcela
    id: 2;
    mail: "marcelaotero@yahoo.com";
    interest: "Regulatory advise";}
    {nombre: Gaston
    id: 3;
    mail: "gastond@yahoo.com";
    interest: "Clinical Trials Management";}};
    

class Usuario {
    constructor (nombre, id, mail, interest) {
        this.nombre = nombre;
        this.id = id;
        this.mail = mail;
        this.interest = interest;
    }

    nuevoUsuario () {
        console.log("Hola nuevo usuario " + this.nombre)
    }
};

let Usuario4 = new Usuario ({nombre: "Christian", id: 5, mail: "christian@coderhouse.com" , interest: "Research and Development"}); 

Usuario4.nuevoUsuario();

for (const nombre in Usuario4) {

    console.log(Usuario4[nombre])
};

const IngresarUsuario=() => {
    Usuario.push(new Usuario (prompt("Ingresar nombre")));
    console.log(Usuarios)};

let valorBusqueda = prompt ("INGRESE BUSQUEDA");

console.log(Usuario.find (x => Usuario.nombre === valorBusqueda));

