function Persona(nombre, apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura= altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.SoyAlto = function(){
    if(this.altura>=1.80){
        console.log(`Soy Alto! Segun los estandares! `)
    }
    else{
        console.log(`Soy Mediano Segun los estandares!`)
    }
}

var jhurgen = new Persona('Jhurgen','Maraza',1.65)

var erika = new Persona('Erika','Luna',1.80)

var arturo = new Persona('Arturo','Martinez',1.70)