import * as readline from 'readline-sync';

// Gerar número randomico
function obterInt(min: number, max: number): number {
    min = Math.ceil(min);  //arredonda  pra  cima        
    max = Math.floor(max);  //arredonda  para  baixo        
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let valor: number = obterInt(0, 30);

for (let i = 0; i < 5; i++) {
    let resposta = readline.questionInt('Digite  um  numero  (0  a  30):  ');
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
