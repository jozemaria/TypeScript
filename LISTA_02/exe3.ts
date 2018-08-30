import * as readline from 'readline-sync';



let nome: string = readline.question('Qual o seu nome? ');
let idade: number = readline.questionInt('Quantos anos você tem? ');




let parabens = function() {
    let frases: string[] = [`- Parabéééns ${nome}, muitos anos de vida, que esse dia se repita por mais ${idade} anos.`,
    `- Que legal ${nome}, hoje é seu aniversario, muitos anos de vida.`,
    `- Olá ${nome}, você está completando ${idade} anos? PARABEENS!!`,
    `- Parabéééns ${nome}, Muitos anos de Vida!!`,
    `- E hoje os parabééns vai para o ${nome}`];
    var num = Math.floor(Math.random() * 4);
    return frases[num]
}

console.log(parabens());
