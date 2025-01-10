/*Variables */
let suma;
let resta;
let multiplicacio;
let divisio;
let show;
let s;
let r;

let value = "";
let previousValue = null;
let op = null;

const button_suma = document.getElementsByClassName('btn suma')[0];
const button_resta = document.getElementsByClassName('btn resta')[0];
const button_multi = document.getElementsByClassName('btn multi')[0];
const button_divisio = document.getElementsByClassName('btn division')[0];
const button_zero = document.getElementsByClassName('btn zero')[0];
const button_point = document.getElementsByClassName('btn point')[0];
const button_igual = document.getElementsByClassName('btn igual')[0];
const button_one = document.getElementsByClassName('btn one')[0];
const button_two = document.getElementsByClassName('btn two')[0];

const label_resultat = document.getElementById('resultado');


/*Funciones */

function update(){
    label_resultat.innerText = value;
}

function afegirValue(valor){
    value += valor;
    update();
}

function operacion(oper){
    if (value == "") return;
    previousValue = parseFloat(value);
    operation = oper;
    
}
function Suma(){
    /*Suma de los números */
    let a = 4;
    let b = 2;
    let suma = a + b;
    label_resultat.innerText = suma;
}

function Resta(){
    /*Resta de los números */
    let a = 2;
    let b = 12;
    let resta = a - b;
    label_resultat.innerText = resta;
}

function Multiplicacio(){
    /*Multiplicación de los números */
    label_resultat.innerText = "3";
}

function Divisio(){
    /*División de los números */
}

function Equal(){
    /*Show the answer in the label */
}

function One(){
    
}


/*Codigo */


button_suma.addEventListener('click', Suma);
button_resta.addEventListener('click', Resta);
button_multi.addEventListener('click', Multiplicacio);
button_divisio.addEventListener('click', Divisio);

