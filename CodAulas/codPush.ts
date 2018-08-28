export{}

let aluno: string = 'José';
let acertou: boolean;

if (aluno === 'Jos') {
    acertou = true;
} else {
    acertou = false;
}

let precos: number[] = [15.4, 45.4, 494.7];


let vendas: any[] = ['Corola', 2015, 65000.0];
vendas.push(['Uno', 2012, 35000.0]);
vendas.push(['Palio', 2017, 30000.0]);

let notas: number[] = [];

notas.push(89.9);
notas.push(55.9);
notas.push(97.9);



console.log(notas);
console.log(vendas);
console.log(vendas[4][2]);
console.log(precos[2]);
console.log(acertou);
console.log(`Olá ${aluno}, tudo bem com vc?`);
