var jhurgen = {
    nombre: 'Jhurgen',
    apellido: 'Maraza',
    edad: 19,
    peso: 70
}


console.log(`Al inicio del año ${jhurgen.nombre} pesa ${jhurgen.peso}kg `)

const INCREMENTO_DE_PESO= 0.3
const DIAS_DEL_ANO=365

const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jhurgen.peso - 3
var dias = 0

while(jhurgen.peso > META){
    
    if(comeMucho()){
    //Aumentar de Peso
    
    aumentarDePeso(jhurgen)
    }
    if(realizaDeporte() ){
    //Adelgazar
    adelgazar(jhurgen)
    }
    dias+=1
}


// console.log(`Al final del año ${jhurgen.nombre} pesa ${jhurgen.peso.toFixed(1)}kg `)
console.log(`Pasaron ${dias} dias hasta que ${jhurgen.nombre} adelgazara 3kg`)