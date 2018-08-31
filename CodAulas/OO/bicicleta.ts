import * as readline from 'readline-sync';

export class Bicicleta {
    private velocidade: number;

    constructor() {
        this.velocidade = 0.0;
    }

    /**
    *
    * @param final Velocidade final após pedalar a bicicleta. 
    * A bicicleta pode ir até no máximo a 70km/h;
    *  */
    pedalar(final): void {
        if (this.velocidade + final <= 70){
            this.velocidade += final;
        }
        else {
            this.velocidade = 70;
        }

    //this.velocidade += 10;
    }
    obterVelocidade(): number {
        return this.velocidade;
    }

}


let b1 = new Bicicleta();
let teste: string = readline.questionFloat('Qual é a velocidade? ')

b1.pedalar(teste);
b1.pedalar(teste);

console.log(b1.obterVelocidade());

