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
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido)
        }
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
    saludar(fn){
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabia que eras Desarrollador/a`)
    }
}


 var jhurgen = new Persona('Jhurgen','Maraza',1.65)

 var erika = new Persona('Erika','Luna',1.80)

 var arturo = new Desarrollador('Arturo','Martinez',1.70)

 jhurgen.saludar()
 erika.saludar(responderSaludo)
 arturo.saludar(responderSaludo)