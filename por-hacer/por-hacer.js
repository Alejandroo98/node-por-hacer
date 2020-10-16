const { black } = require('colors/safe');
const fs = require('fs');
const { array } = require('yargs');

let listadoPorHacer = [];

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile(`db/data.json`, data , (err) => {   //tablas/ es la carpeta /tabla es el nombre del archivo , data es el archivo que queremos guardar , (err) es el calck que quiero que se ejecute en cuanto ocurra un error
        if( err ) throw new Error( 'No se pudo grabar ' , err )
        // if (error) 
        // reject(error); 
        // else
        // resolve(`tabla - ${base}.txt`);
    });

}

/* LEER UNFORMACION DE UN ARCHIVO JSON */ //C. 44 
const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}


let vacia = (BD) => {
    if(BD) {
        console.log('No tienes ninguna tarea todavia'.bgWhite.black);
    }
}

let getListado = () => {
    cargarBD();
    return listadoPorHacer;
}



const crear = (descripcion) => {

    cargarBD();

    let porHacer = {
        descripcion,
        completado : false
    }
    listadoPorHacer.push( porHacer );
    guardarBD()
    vacia()
    
    return porHacer;
}


const actualizar = ( descripcion , completado = true ) => {
    cargarBD();
    let index = listadoPorHacer.findIndex( x => x.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true
    }else{
        return false
    }
}

let borrar = ( tarea ) => {
    cargarBD();
    let prueba = listadoPorHacer.findIndex( x => {
       return  x.descripcion === tarea ;
    });

    if ( prueba === -1 ){
        console.log('La tarea no existe'.red)
    }else{
        listadoPorHacer.splice( prueba , 1 )
        console.log('Tarea eliminada' . yellow); 
        guardarBD()
    }


}
 


module.exports = {
    crear,
    getListado,
    actualizar,
    vacia,
    borrar
}
//Hasa aqui C. 43
