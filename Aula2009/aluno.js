"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno(m, n) {
        this.matricula = m;
        //this.nome; //recebe valor Default
        this.nome = n; //recebe valor de N do contrutor
    }
    Object.defineProperty(Aluno.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        // public modificarMatricula(mm: number){
        //     if (mm > 0){
        //         this.matricula = mm;
        //     }
        // }
        set: function (v) {
            if (v > 0) {
                this._matricula = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (v) {
            this._nome = v;
        },
        enumerable: true,
        configurable: true
    });
    return Aluno;
}());
exports.Aluno = Aluno;
//criar objeto KCT
var bruno = new Aluno(12, 'Xico da Bomba');
console.log(bruno.matricula);
bruno.matricula = 3214;
console.log(bruno.matricula);
