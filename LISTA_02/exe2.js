"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
// Gerar número randomico
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda  pra  cima        
    max = Math.floor(max); //arredonda  para  baixo        
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var valor = obterInt(0, 30);
for (var i = 0; i < 5; i++) {
    var resposta = readline.questionInt('Digite  um  numero  (0  a  30):  ');
    if (resposta === valor) {
        console.log("Acertou!");
        break;
    }
    else if (i == 4) {
        console.log("ERROU! O numero era " + valor);
    }
    else if (resposta < valor) {
        console.log("Seu palpite foi menor");
    }
    else if (resposta > valor) {
        console.log("Seu palpite foi maior");
    }
}
