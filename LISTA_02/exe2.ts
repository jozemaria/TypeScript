
import * as readline from 'readline-sync';

// Gerar número randomico
function obterInt(min: number, max: number): number {
    min = Math.ceil(min);  //arredonda  pra  cima        
    max = Math.floor(max);  //arredonda  para  baixo        
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pol = readline.questionInt('Digite um número: ')
let diego = readline.questionInt('Digite outro número: ')

let valor: number = obterInt(pol, diego);

for (let i = 0; i < 5; i++) {
    let resposta = readline.questionInt(`Digite  um  numero  (${pol}  a  ${diego}):  `);
    if (resposta === valor) {
        console.log("Acertou!");
        break;
    }
    else if (i == 4) {
        console.log(`ERROU! O numero era ${valor}`);
    }
    else if (resposta < valor) {
        console.log("Seu palpite foi menor");
    }
    else if (resposta > valor) {
        console.log("Seu palpite foi maior");
    }
}
