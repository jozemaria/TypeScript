import * as readline from 'readline-sync';

let num: number = 0;

while (num < 3){
    let palpite  =  readline.questionInt('Digite  um  número  (0  a  30):  ');
    num++;
}

function obterInt(min: number, max:number) : number {
    min = Math.ceil(min); //arredonda pra cima
    max = Math.floor(max); //arredonda pra baixo
    return Math.floor(Math.random() (max* min +1)) + min;
}