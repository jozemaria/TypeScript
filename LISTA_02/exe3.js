"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var nome = readline.question('Qual o seu nome? ');
var idade = readline.questionInt('Quantos anos você tem? ');
var num = Math.floor(Math.random() * 4);
var pegarNome = function (nome, idade) {
    var frases = ["- Parab\u00E9\u00E9\u00E9ns " + nome + ", muitos anos de vida, que esse dia se repita por mais " + idade + " anos.",
        "- Que legal " + nome + ", hoje \u00E9 seu aniversario, muitos anos de vida.",
        "- Ol\u00E1 " + nome + ", voc\u00EA est\u00E1 completando " + idade + " anos? PARABEENS!!",
        "- Parab\u00E9\u00E9\u00E9ns " + nome + ", Muitos anos de Vida!!",
        "- E hoje os parab\u00E9\u00E9ns vai para o " + nome];
    console.log(frases[num]);
};
pegarNome(nome, idade);
