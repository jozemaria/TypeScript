//EXERCICIO 01
let nomes:  string[]  =  ['Bruno',  'Elaine',  'José',  'Matheus',  'Maria','Alana',  
'Erika',  'Alison',  'Lucas',  'Rickson',  'Alberto',  'Beatriz','Renata',  'Sayonara'];

//a)
nomes.push('Paulo', 'Albertina'); //Push está recebendo duas string, e add na ultima posição.

//b)
console.log(`## Total de nomes ${nomes.length} ##`); //tamanho total da string

//c)asd
nomes.splice(2,1); //ainda não entendi, mas tira a posição e contiua da onde tirou
console.log(nomes);

//d)
console.log(`O nome selecionado está na ${nomes.indexOf('Bruno')+1} posição`);

//e)
let cont: number = 0; //esse "for" está andando todo array, vendo os nomes que começam com A.
for(let i in nomes){
    if (nomes[i][0] === "A"){
        cont += 1;
    }
}

console.log(`A quantidade de nomes com a letra A é de: ${cont}`);
console.log(`## Total de nomes: ${nomes.length} ##`);
