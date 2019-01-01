var jhurgen ={
    nombre:'Jhurgen',
    apellido:'Maraza',
    altura:1.65
}
var mauro = {
    nombre:'Mauro',
    apellido:'Gauto',
    altura:1.70
}
var martin={
    nombre:'Martin',
    apellido:'Gomez',
    altura:1.85
}
var vicky={
    nombre:'Vicky',
    apellido:'Zapata',
    altura:1.56
}
var paula ={
    nombre:'Paula',
    apellido:'Barros',
    altura:1.76
}

const esAlta = ({altura}) => altura > 1.8

const esBaja = ({altura}) => altura < 1.70


var personas = [jhurgen,mauro,martin,vicky,paula]

// for(var i=0;i< personas.length;i++){
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

// var personasAltas = personas.filter(function(persona){
//     return persona.altura > 1.8
// })

const pasarAlturaaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
    })

var personasCms = personas.map(pasarAlturaaCms)

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)
