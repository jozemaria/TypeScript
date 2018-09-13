//Questão 01:
var texto = "   O IFRN campus Parnamirim possui diversos cursos nas áreas de informática, redes e mecatrônica";
console.log(texto);
//Questão a)
console.log("== O tamanho total do texto \u00E9 de " + texto.length + " ==");
//Questão b)
console.log("== A primeira Letra 'D' est\u00E1 na Possi\u00E7\u00E3o " + texto.indexOf('d') + " do texto. ==");
//Questão c)
var separar = texto.split(' ');
console.log("== O texto possui " + separar.length + " palavras no texto. ==");
function quant_palavras(texto) {
    return texto.trim().split(' ').length;
}
console.log(quant_palavras(texto));
console.log('jose.maria@gmail.com.br'.split('.'));
