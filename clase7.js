var jhurgen = {
    nombre: 'Jhurgen',
    apellido: 'Maraza',
    edad: 19
}

var dario = {
    nombre:'Dario',
    apellido:'Gomez',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
var {nombre}=persona
console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jhurgen)

function imprimirNombreyEdad(persona){
var {nombre}=persona
var {edad}=persona
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreyEdad(jhurgen);
imprimirNombreyEdad(dario);