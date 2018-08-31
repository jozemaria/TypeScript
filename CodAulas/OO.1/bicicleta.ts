

export class Bicicleta {
    private velocidade: number;

    constructor() {
        this.velocidade = 0.0;
    }
    /**
    *
    * @param final teste de comentário;
    *  */

    pedalar(final): void {
        if (this.velocidade + final <= 70){
            this.velocidade += final;
        }
        else {
            this.velocidade == 70;
        }

    //this.velocidade += 10;
    }
    obterVelocidade(): number {
        return this.velocidade;
    }

}


let b1 = new Bicicleta();
b1.pedalar(60);
b1.pedalar(40);

console.log(b1.obterVelocidade());

