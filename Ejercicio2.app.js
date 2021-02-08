'use strict'
//Ejercicio 2 Dadas 3 variables con valores predefinidos, hacer los pasos necesarios para que quede en variable_1 el menor de los 3 valores, en variable_2 el siguiente y en variable_3 el mayor valor. Mostrar el resultado por pantalla. Pista: es necesaria una variable auxiliar.//
var variable_1=60;
var variable_2=18;
var variable_3=45;
var auxiliar=0;
if(variable_1>variable_2){
    auxiliar=variable_1;
    variable_1=variable_2;
    variable_2=auxiliar;}
if(variable_1>variable_3){
    auxiliar=variable_1;
    variable_1=variable_3;
    variable_3=auxiliar;}
if(variable_2>variable_3){
    auxiliar=variable_2;
    variable_2=variable_3;
    variable_3=auxiliar;}
console.log("El menor valor es: "+variable_1);
console.log("El valor intermedio es: "+variable_2);
console.log("El mayor valor es: "+variable_3);
