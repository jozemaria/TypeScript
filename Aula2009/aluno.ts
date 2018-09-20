export class Aluno {
    private _matricula: number;
    public _nome:string;

    constructor(m: number,
                n: string){
                this.matricula = m;
                //this.nome; //recebe valor Default
                this.nome = n; //recebe valor de N do contrutor
    }

    // public modificarMatricula(mm: number){
    //     if (mm > 0){
    //         this.matricula = mm;
    //     }
    // }

    
    private set matricula(v : number) {
        if (v > 0) {
        this._matricula = v;
        }
    }
    
    public get matricula() : number {
        return this._matricula;
    }
    

    
    public set nome(v : string) {
        this._nome = v;
    }

    
    public get nome() : string {
        return this._nome;
    }
    
    
}
//criar objeto KCT
let bruno: Aluno = new Aluno(12, 'Xico da Bomba');
console.log(bruno.matricula);
bruno.matricula = 3214;
console.log(bruno.matricula);