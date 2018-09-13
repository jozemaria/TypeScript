//Questão 01:
let texto: string = "   O IFRN campus Parnamirim possui diversos cursos nas áreas de informática, redes e mecatrônica";
console.log(texto);


//Questão a)
console.log(`== O tamanho total do texto é de ${texto.length} ==`);

//Questão b)
console.log(`== A primeira Letra 'D' está na Possição ${texto.indexOf('d')} do texto. ==`);

//Questão c)
let separar = texto.split(' ');
console.log(`== O texto possui ${separar.length} palavras no texto. ==`);

function quant_palavras (texto: string): number{
    return texto.trim().split(' ').length
}


console.log(quant_palavras(texto));

console.log('jose.maria@gmail.com.br'.split('.'));