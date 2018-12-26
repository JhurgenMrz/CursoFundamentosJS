var jhurgen = {
    nombre: 'Jhurgen',
    apellido: 'Maraza',
    edad: 19
}

var dario = {
    nombre:'Dario',
    apellido:'Gomez',
    edad: 17
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


function cumpleAnos(persona){
    return {
        ...persona,
        edad:persona.edad+1
    }
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de Edad`)
}else{
    console.log(`${persona.nombre} es menor de Edad`)
}
}

const permitirAcceso = persona => !esMayorDeEdad(persona) ? 
    console.log('ACCESO DENEGADO') : console.log('ACCESO PERMITIDO')