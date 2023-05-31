const multiplicar = require('./multiplicar');
const restar = require('./restar');
const sumar = require('./sumar');
const dividir = require('./dividir');

//requires
const argv = require('process').argv;


//variables
let operacion = argv[2];
let numberA = +argv[3];
let numberB = +argv[4];

let resultado = 0;


//funcionalidad

if (operacion === 'sumar') {
   console.log(sumar(numberA,numberB)); 
}

if(operacion === 'restar'){
    console.log(restar(numberA,numberB)); 
}
if(operacion === 'multiplicar'){
    console.log(multiplicar(numberA,numberB)); 
}
if(operacion === 'dividir'){
    console.log(dividir(numberA,numberB)); 
}