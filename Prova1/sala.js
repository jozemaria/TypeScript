"use strict";
exports.__esModule = true;
var aluno = /** @class */ (function () {
    function aluno(nm, cs) {
        this.matricula = 0;
        this.nome = nm;
        this.curso = cs;
    }
    aluno.prototype.inserirMatricula = function (mm) {
        if (mm.toString().length === 5) {
            this.matricula = mm;
            return true;
        }
        return false;
    };
    aluno.prototype.obterMatricula = function () {
        return this.matricula;
    };
    return aluno;
}());
exports.aluno = aluno;
var turma = /** @class */ (function () {
    function turma(pr) {
        this.professor = pr;
        this.alunos = [];
    }
    turma.prototype.adicionarAluno = function (al) {
        this.alunos.push(al);
        obterAlunos();
        Alunos[];
        {
            return this.alunos;
        }
    };
    return turma;
}());
exports.turma = turma;
var luiz = new aluno('Luiz', 'Info');
luiz.inserirMatricula(12345);
var tsi2 = new turma('Bruno');
tsi2.adicionarAluno(luiz);
console.log(tsi2.obterAlunos());
