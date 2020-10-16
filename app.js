/* SECCION 5  - C. 41  */
// const colors = require('colors');
var colorsDos = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer')
// const argv = require("yargs").argv
const   argv  = require('./config/yargs').argv;
let comando = argv._[0]



// let getListado = () => {
//     let listado = porHacer.getListado;
//     for (const tarea of listado) {
//     console.log('========== Por hacer ==========='.green);
//     console.log(tarea.descripcion)
//     console.log('Estado' , tarea.completado);
//     console.log('================================='.green);
// }
// } 


switch (comando) {
    case "crear":
        let tarea = porHacer.crear( argv.descripcion)
        // console.log('Crear por hacer');
        console.log(tarea);
        break;
    case "listar" :

        let listado = porHacer.getListado();
        if( listado.length === 0 ){
            porHacer.vacia(true)
        }
        for (let tarea of listado) {
        console.log('========== Por hacer ==========='.green);
        console.log(tarea.descripcion)
        if( tarea.completado ){
            console.log('Estado' , colorsDos.cyan(tarea.completado))
        }else{
            console.log('Estado' , colorsDos.red(tarea.completado))
        }
        console.log('================================='.green);
        }
        break;
    case "actualizar" : 
    let actualizado = porHacer.actualizar( argv.descripcion , argv.completado);
    console.log(actualizado);
    break;
    case 'borrar':
        porHacer.borrar( argv.descripcion );
        break;
    default:
        console.log('El comando no es reconocido'.red);
}
//Hasta aqui C. 45









