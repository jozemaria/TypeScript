"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Bicicleta = /** @class */ (function () {
    function Bicicleta() {
        this.velocidade = 0.0;
    }
    /**
    *
    * @param final Velocidade final após pedalar a bicicleta.
    * A bicicleta pode ir até no máximo a 70km/h;
    *  */
    Bicicleta.prototype.pedalar = function (final) {
        if (this.velocidade + final <= 70) {
            this.velocidade += final;
        }
        else {
            this.velocidade = 70;
        }
        //this.velocidade += 10;
    };
    Bicicleta.prototype.obterVelocidade = function () {
        return this.velocidade;
    };
    return Bicicleta;
}());
exports.Bicicleta = Bicicleta;
var b1 = new Bicicleta();
var teste = readline.questionFloat('Qual é a velocidade? ');
b1.pedalar(teste);
b1.pedalar(teste);
console.log(b1.obterVelocidade());
