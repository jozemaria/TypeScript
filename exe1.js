//EXERCICIO 01
var nomes = ['Bruno', 'Elaine', 'José', 'Matheus', 'Maria', 'Alana',
    'Erika', 'Alison', 'Lucas', 'Rickson', 'Alberto', 'Beatriz', 'Renata', 'Sayonara'];
//a)
nomes.push('Paulo', 'Albertina');
//b)
console.log("## Total de nomes " + nomes.length + " ##");
//c)
delete nomes[2];
//d)
console.log("O nome est\u00E1 na " + (nomes.indexOf('Bruno') + 1) + " posi\u00E7\u00E3o");
//e)
//PRINT
console.log(nomes);
console.log("## Total de nomes: " + nomes.length + " ##");
