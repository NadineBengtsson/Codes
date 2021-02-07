// desafio complementario 

let Descuento = (0.50);

const suma = (precioProducto, precioDescuento) => {precioProducto + precioDescuento};

const resta = (precioProducto, precioDescuento) => {precioProducto - precioDescuento};

const iva = () => ((precioProducto) * (0.21));

let precioProducto = 15.000; //carito el producto jaja

let precioDescuento = (precioProducto * Descuento);

let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)), precioDescuento);

console.log(nuevoPrecio);

