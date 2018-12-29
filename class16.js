var lenguaje = prompt('Cual es tu lenguaje/framework favorito?')

switch(lenguaje){
    case 'javascript':
    case 'Javascript':
    case 'JAVASCRIPT':
        console.log(`Es un Lenguaje de front-end que hoy en dia se puede utilizar hasta para hacer back-end`)
        break
    case 'html':
        console.log(`Es un Lenguaje de maquetado, escencial para el front`)
        break
    case 'css':
        console.log(`Es un Lenguaje de diseño para el front en el que los ultimos años avanzo bastante`)
        break
    case 'java':
        console.log(`Es un Lenguaje de con le que podes crear aplicaciones Desktop y app android`)
        break
    default:
        console.log(`No encontramos ese Lenguaje`)
        break
}

