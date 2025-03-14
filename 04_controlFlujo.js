//funciones
var nombre = "andres";
hola(nombre);

function hola(nombre) {
  console.log(nombre);
}

function saludo() {
  console.log("hola");
}
saludo();

//expresion o anonimas
var suma = function(a,b) {
    return a+b;
}

console.log(suma(2,2));

//funcion flecha

var restar =(a,b) => {
return a-b;
}

console.log(restar(4,2));

var multi = (a,b)=> a*b;

console.log(multi(2,2));