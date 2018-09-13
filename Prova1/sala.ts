//Questão 03:
import * as readline from 'readline-sync';


export class aluno{
    private matricula: number;
    private nome: string;
    private curso: string;

    constructor(nm: string, cs:string){
        this.matricula = 0;
        this.nome  = nm;
        this.curso = cs;
    }



    inserirMatricula(mm: number): boolean{
            if (mm.toString().length === 5){
                this.matricula = mm;
                return true;
            }
            return false;
        }
    obterMatricula (){
        return this.matricula;
    }

}

export class turma {
    private alunos: Alunos[];
    private professor: string;

    constructor(pr: string){
        this.professor =  pr;
        this.alunos = [];
    }
    adicionarAluno(al: Aluno): void{
        this.alunos.push(al);
 
    obterAlunos(): Alunos[] {
        return this.alunos;
    }
    }
}

let luiz = new aluno('Luiz', 'Info');
luiz.inserirMatricula(12345);


let tsi2 = new turma('Bruno');
tsi2.adicionarAluno(luiz);

console.log(tsi2.obterAlunos());