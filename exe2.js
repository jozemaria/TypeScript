"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var num = 0;
while (num < 3) {
    var palpite = readline.questionInt('Digite  um  número  (0  a  30):  ');
    num++;
}
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda pra cima
    max = Math.floor(max); //arredonda pra baixo
    return Math.floor(Math.random()(max * min + 1)) + min;
}
