var nome = 'José Maria';
var data = new Date();
function dia_extenso(dia) {
    var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta',
        'Quinta', 'Sexta da Maldade', 'Sabado'];
    // confirma se dia vai até de 0 a 6 para não quebrar
    if (dia >= 0 && dia <= 6) {
        return dias[dia];
    }
    return ''; //Retornar vazio casao seja outro dia
}
console.log("Ol\u00E1,  " + nome + ", hoje \u00E9 " + dia_extenso(data.getDay()));
