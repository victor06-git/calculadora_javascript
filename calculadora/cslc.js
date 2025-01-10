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
const button_three = document.getElementsByClassName('btn three')[0];

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
    value = "";
}

function calculate() {
    if (previousValue === null || value === "") return;
    let result;
    const currentNum = parseFloat(value);

    switch (operation) {
        case '+':
            result = previousValue + currentNum;
            break;
        case '-':
            result = previousValue - currentNum;
            break;
        case '*':
            result = previousValue * currentNum;
            break;
        case '/':
            result = previousValue / currentNum;
            break;
        default:
            return;
    }


    value = result.toString(); //Convert the result to a String
    previousValue = null; //Restart the value
    operation = null; //Restart the value
    update(); //Update

}

function Suma(){ //Fuction Add
    /*Suma de los números */
    return appendValue('+');
}

function Resta(){ //Function Minous
    /*Resta de los números */
    return appendValue('-');
}

function Multiplicacio(){ //Function Multi
    /*Multiplicación de los números */
    return appendValue('*');
}

function Divisio(){ //Function Divide
    /*División de los números */
    return appendValue('/');
}

function Equal(){
    /*Show the answer in the label */
    calculate();
}

function One(){
    return appendValue('1');
}

function Two(){
    return appendValue('2');
}

function Three(){
    return appendValue('3');
}

function Zero(){
    return appendValue('0');
}


/*Codigo */


button_suma.addEventListener('click', Suma);
button_resta.addEventListener('click', Resta);
button_multi.addEventListener('click', Multiplicacio);
button_divisio.addEventListener('click', Divisio);
button_igual.addEventListener('click', calculate);
button_one.addEventListener('click', One);
button_two.addEventListener('click', Two);
button_zero.addEventListener('click', Zero);

