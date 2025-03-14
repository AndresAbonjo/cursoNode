//foreach

var letras = ["a", "b", "c", "d", "e"];
// console.log(letras.length);

// for (let i = 0; i < letras.length; i++) {
//     const element = letras[i];
//     console.log(element);
// }

letras.forEach((elemento) => console.log(elemento));

//push - shift - pop

var letras = ["a", "b", "c", "d", "e"];
letras.push("f");
console.log(letras);

var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);

var ultimoElemento = letras.pop();
console.log(ultimoElemento);
console.log(letras);

// map: crear objeto o modificar arrays

var estudiantes = ["andres", "martina", "pepe", " francisco"];
var asistencia = estudiantes.map((nombre) => {
  return {
    nombre: nombre,
    asistencia: false,
  };
});
// var asistencia = estudiantes.map((nombre) => `${nombre}.`);

console.log(estudiantes);
console.log(asistencia);

//añadir una propiedad a un objeto dentro de un array/obtener una array de una propiedad de un objeto
var productos = [
  { nombre: "camisetas", precio: 15 },
  { nombre: "zapatillas", precio: 20 },
  { nombre: "pantalon", precio: 25 },
];

var productosImpuesto = productos.map((producto) => {
  return {
    ...producto,
    impuesto: 0.12,
  };
});

var precios = productos.map((producto) => producto.precio);

console.log(productos);
console.log(productosImpuesto);
console.log(precios);

// FILTER devuelve un array con todas las coincidencias

var estudiantes = [
  { nombre: "martina", edad: 33, matriculado: true },
  { nombre: "andres", edad: 34, matriculado: false },
  { nombre: "pepe", edad: 18, matriculado: true },
  { nombre: "juan", edad: 77, matriculado: false },
  { nombre: "francisco", edad: 13, matriculado: true },
];

//var filtrado= estudiantes.filter((estudiante)=>estudiante.edad >=21);
var filtrado = estudiantes.filter(
  (estudiante) => estudiante.edad >= 21 && estudiante.matriculado
);

console.log(estudiantes);
console.log(filtrado);

// REDUCE

var calificaciones = [7, 4, 6, 9, 5, 3];
var suma = calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [22, 18, 44, 66, 33, 22, 55, 44, 33];
var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});

console.log(edades);
console.log(resultado);

var ventas = [
  { nombre: "camisetas", precio: 15, totalVendido: 10 },
  { nombre: "zapatillas", precio: 20, totalVendido: 8 },
  { nombre: "pantalon", precio: 25, totalVendido: 30 },
];

var resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombre] = `${totalVentas}$`;
  return acumulador;
}, {});

console.log(ventas);
console.log(resultado);

var estudiantes = [
  { nombre: "martina", edad: 33, matriculado: true },
  { nombre: "andres", edad: 34, matriculado: false },
  { nombre: "pepe", edad: 18, matriculado: true },
  { nombre: "juan", edad: 77, matriculado: false },
  { nombre: "francisco", edad: 13, matriculado: true },
];
var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado++;
      } else {
        acumulador.noMatriculado++;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );
console.log(estudiantes);
console.log(resultado);

//SOME - EVERY

var array = [1, 2, 3, 4, 5, 6, 7, 8];

var resultado = array.every((num) => num % 2 === 0);
// var resultado=array.some((num)=>num%2===0);

console.log(resultado);

//FIND (solo 1 coincidencia)

var estudiantes = [
  { nombre: "martina", edad: 33, matriculado: true },
  { nombre: "andres", edad: 34, matriculado: false },
  { nombre: "pepe", edad: 18, matriculado: true },
  { nombre: "juan", edad: 77, matriculado: false },
  { nombre: "francisco", edad: 13, matriculado: true },
];

var estudiante = estudiantes.find((estudiante) => estudiante.edad === 77);
console.log(estudiantes);
console.log(estudiante);

//FINDINDEX

var estudiantes = [
  { nombre: "martina", edad: 33, matriculado: true },
  { nombre: "andres", edad: 77, matriculado: false },
  { nombre: "pepe", edad: 18, matriculado: true },
  { nombre: "juan", edad: 77, matriculado: false },
  { nombre: "francisco", edad: 13, matriculado: true },
];

var estudiante = estudiantes.findIndex((estudiante) => estudiante.edad === 77);
console.log(estudiantes);
console.log(estudiante);
console.log(estudiantes[estudiante]);

//INCLUDES

var animales = ["gato", "perro", "conejo"];
var resultado = animales.includes("perro");
console.log(resultado);
//tambien on string
console.log("andres".includes("v"));

var buscar = (letra) => {
  var estudiantes = [
    { nombre: "martina", edad: 33, matriculado: true },
    { nombre: "andres", edad: 77, matriculado: false },
    { nombre: "pepe", edad: 18, matriculado: true },
    { nombre: "juan", edad: 77, matriculado: false },
    { nombre: "francisco", edad: 13, matriculado: true },
  ];

  return estudiantes.filter((estudiante) => estudiante.nombre.includes(letra));
};

console.log(buscar("e"));

//JOIN

var estudiantes = [
  { nombre: "martina", edad: 33, matriculado: true },
  { nombre: "andres", edad: 77, matriculado: false },
  { nombre: "pepe", edad: 18, matriculado: true },
  { nombre: "juan", edad: 77, matriculado: false },
  { nombre: "francisco", edad: 13, matriculado: true },
];

var csvGenerator = (array, separador = ",") => {
  let headers = Object.keys(array[0]).join();
  let data = array.map((element) => Object.values(element).join(separador));
  console.log(headers);
  data.forEach((element) => console.log(element));
};

csvGenerator(estudiantes);


var array=[1,2,3,4,5];
var array2=[6,7,8,9];
console.log( array.concat(array2));


console.log("hola");