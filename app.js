const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// option('l')
// listar
// boolean
// default: false

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

// console.log(argv);

// console.log('base: yargs', argv.b);
// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err) );