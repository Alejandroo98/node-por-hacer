    const colors = require('colors');
const { yellow } = require('colors/safe');

//Esta es una forma de hacer lo de abajo - Opcion 1
/* const argv = require('yargs')
                .command('crear' , 'Crear un elemento por hacer', {
                    descripcion : {
                        alias : "d"
                    }
                })
                .command('actualizar ' , 'Actualiza el estado completado de una tarea' , {
                    descripcion : {
                        alias : "d",
                        demand : true,
                        desc : 'Descripcion de la tarea por hacer'
                    },
                    completado : {
                        alias : "c",
                        desc : 'Marca como completado o pendiente la tarea'
                        default : true
                    }
                })
                .help()
                .argv
 */



 /* 
 //Opcion Dos

 const desciprcion =  {
                        alias : "d",
                        demand : true,
                        desc : 'Descripcion de la tarea por hacer'
                    };

const completado =  {
                        alias : "c",
                        desc : 'Marca como completado o pendiente la tarea'
                        default : true
                    }                 
 
 
 const argv = require('yargs')
                .command('crear' , 'Crear un elemento por hacer', {
                    descripcion
                })
                .command('actualizar ' , 'Actualiza el estado completado de una tarea' , {
                    descripcion,
                    completado 
                })
                .help()
                .argv
 */

 
//Opcion tres   //Hace lo mismo que arriba pero de diefernte manera, mas optimizado
 const opts = {
     descripcion : {
         alias : 'd',
         demand : true,
         desc : 'Descripcion de la tarea por hacer'
     },
     completado : {
         alias : 'c',
         default     : true,
         desc : 'Marca como completado o pendiente la tarea'
     }
 }

 const argv = require('yargs')
 .command('crear' , 'Crear un eleeto por hacer'.yellow , opts)
 .command('actualizar' , 'El estado completado de una tarea'.yellow , opts)
 .command( 'borrar', 'Borrara una tarea'.yellow , opts)
 .help()
 .argv;

 module.exports = {
     argv
 }
//Hasta qui C.42


