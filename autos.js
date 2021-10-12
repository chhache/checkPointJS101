//Al fin momento de codear !! ...
//Array de Objetos y módulo
// El archivo .js que exporta deberá tener una sintaxis similar a la siguiente
// const IVA = 16;
// module.exports = IVA
// El archivo .js que recibe la data exportada, la procesa con una sintaxis similar a la siguiente
// const ivaMexico = require("./nombrearchivo.js")

let autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: '2019',
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 100000,
        km: 0,
        color: 'Blanco',
        cuotas: 14,
        anio: 2019,
        patente: 'JJK116',
        vendido: false
    }];

module.exports = autos;
