var jhurgen ={
    nombre:'Jhurgen',
    apellido:'Maraza',
    altura:1.65
}
var mauro = {
    nombre:'Mauro',
    apellido:'Gauto',
    altura:170
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

var personas = [jhurgen,mauro,martin,vicky,paula]

for(var i=0;i< personas.length;i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}