// Placa-mãe:  R$800
// Opções  de  processadores:  i3  (R$  400,00),  i5  (R$  600,00)  e  i7  (R$  800,00)
// Opções  de  memória:  2  GB  (R$  200,00),  4GB  (R$  350,00)  e  8GB  (R$  650,00)
// Opções  de  disco  rígido:  500  GB  (270,00)  e  1  TB  (R$  500)
// Opções  de  monitor:  15  polegadas  (R$  320,00)  e  17  polegadas  (R$  520)
import * as readline from 'readline-sync';

export class computador {
    private processador;
    private ram;
    private hd;
    private tela;



    constructor(pro: number, ram: number, hd: number, tela: number){
        this.processador = pro;
        this.ram = ram;
        this.hd = hd;
        this.tela = tela;
    }
    calcularPreco(){
 
    }

}

 