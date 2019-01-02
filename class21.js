// function heredaDe(prototipoHijo,prototipoPadre){
//     var fn = function (){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype =new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }

class Persona{
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura= altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    SoyAlto(){
        if(this.altura>=1.80){
            console.log(`Soy Alto! Segun los estandares! `)
        }
        else{
            console.log(`Soy Mediano Segun los estandares!`)
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

    }
}


// var jhurgen = new Persona('Jhurgen','Maraza',1.65)

// var erika = new Persona('Erika','Luna',1.80)

// var arturo = new Persona('Arturo','Martinez',1.70)