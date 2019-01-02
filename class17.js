var jhurgen ={
    nombre:'Jhurgen',
    apellido:'Maraza',
    altura:1.65,
    cantidadDeLibros: 91
}
var mauro = {
    nombre:'Mauro',
    apellido:'Gauto',
    altura:1.70,
    cantidadDeLibros: 24
}
var martin={
    nombre:'Martin',
    apellido:'Gomez',
    altura:1.85,
    cantidadDeLibros: 85

}
var vicky={
    nombre:'Vicky',
    apellido:'Zapata',
    altura:1.56,
    cantidadDeLibros: 123

}
var paula ={
    nombre:'Paula',
    apellido:'Barros',
    altura:1.76,
    cantidadDeLibros: 78

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

/*
var acum = 0

for (var i=0;i<personas.length;i++){
    acum= acum+personas[i].cantidadDeLibros
}
console.log(`En total todos tienen ${acum} libros`)*/

const reducer = (acum, {cantidadDeLibros }) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)
