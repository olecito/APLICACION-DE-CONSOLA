const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const argv1 = require('./config/yargs');



console.clear();

crearArchivo(argv.b, argvl, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));








// // const [,,arg3 = 'base = 5'] = process.argv;
// // const [ ,base = 5 ] = arg3.split('=');
