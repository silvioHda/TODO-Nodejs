const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado ={
    defaul: true,
    alias: 'c',
    desc: 'maraca como completado o pendiente la tarea'  
}

const argv = require('yargs')
            .command('crear','Crear un elemento por hacer',{
                descripcion
            })
            .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion,
                completado
            }).command('borrar','borra una tarea',{
                descripcion
            }).help().argv;


module.exports={
    argv
}