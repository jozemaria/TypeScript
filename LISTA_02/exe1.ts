//EXERCICIO 01
let nomes:  string[]  =  ['Bruno',  'Elaine',  'José',  'Matheus',  'Maria','Alana',  
'Erika',  'Alison',  'Lucas',  'Rickson',  'Alberto',  'Beatriz','Renata',  'Sayonara'];

//a)
nomes.push('Paulo', 'Albertina'); //Push está recebendo duas string, e add na ultima posição.

//b)
console.log(`## Total de nomes ${nomes.length} ##`); //tamanho total da string;

//c)
nomes.splice(2,1); //Remove o segundo elemento do vetor um elemento;
console.log(nomes);

//d)
console.log(`O nome selecionado está na ${nomes.indexOf('Bruno')} posição`);

//e)
let quant: number = 0; //Variável para contar;

//===== "for" Tradicional está andando todo array, vendo os nomes que começam com A. =====
//for(let i in nomes){
//    if (nomes[i][0] === "A"){
//        quant += 1;
//    }
//}

//===== "forEach" percorre N, "charAt" pegando a primeira posição de N do Array quando igual a A, adiciona a quant =====
nomes.forEach(n => {
    if (n.charAt(0) === 'A'){
        quant++;
    }
})

//===== "filter" pega da lista letras com B, "length" está dando a quantidade =====
//console.log(nomes.filter(n => n.charAt(0) === 'B').length);




console.log(`A quantidade de nomes com a letra A é de: ${quant}`);
console.log(`## Total de nomes: ${nomes.length} ##`);
