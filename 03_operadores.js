/**
 * operadores
 */

var x=3;
var y=4;
x+=y;
console.log(x);

x %=y;
console.log(x);

x**=y;
console.log(x);

console.log(2<3 ? 'es menor' : 'es mayor');

// operador desestructuración objeto

var persona={
    nombre:'andres',
    apellido: 'abonjo'
}

var {nombre:caca, apellido}=persona;
console.log(caca, apellido);

//operador destructuracion array
var array=[1,2,3,4,5];

var [primeraPosicioin, segundaPosicion]=array;
console.log(primeraPosicioin, segundaPosicion);


/**
 * opererador de miembro o acceso de propiedad
 */

var persona={
    nombre:'andres',
    apellido: 'abonjo'
}
console.log(persona.nombre);



var persona={
    nombre:'andres',
    apellido: 'abonjo'
}

console.log(persona['nombre']);

/**
 * typeOf
 */

console.log(typeof 3);