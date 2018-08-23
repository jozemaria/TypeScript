let nome: string = 'José Maria';
let data: Date = new Date();



function dia_extenso(dia: number): string {
    const dias: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta da Maldade', 'Sabado'];
    // confirma se dia vai até de 0 a 6 para não quebrar
    if (dia >= 0 && dia <= 6){ 
        return dias[dia];
    }
    return ''; //Retornar vazio casao seja outro dia
 
}


console.log(`Olá,  ${nome}, hoje é ${dia_extenso(data.getDay())}`);