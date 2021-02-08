var Descuento = (0.50);
var precioProducto = 15.000;
var precioDescuento = (precioProducto * Descuento);

const suma = (precioProducto, precioDescuento) => 
    {precioProducto + precioDescuento};
const resta = (precioProducto, precioDescuento) => 
    {precioProducto - precioDescuento};
const iva = () => 
    {((precioProducto) * (0.21))};

let nuevoPrecio= resta ((suma + iva));

console.log(nuevoPrecio);


