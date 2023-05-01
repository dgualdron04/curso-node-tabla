

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, l = false, h = 10 ) => {

    /* return new Promise( (resolve, reject) => {
        console.log('====================');
        console.log('    Tabla del:', base);
        console.log('====================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${5*i}\n`;    
        }

        console.log(salida);

        fs.writeFileSync( `tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt`);
    }) */

    try {
        
        if (l) {
            console.log('===================='.green);
            console.log('    Tabla del:'.green, colors.blue(base));
            console.log('===================='.green);
        }

        let salida = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;    
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base*i}\n`;    
        }

        if (l) console.log(consola);

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}