"use strict";
exports.__esModule = true;
var Bicicleta = /** @class */ (function () {
    function Bicicleta() {
        this.velocidade = 0.0;
    }
    /**
    *
    * @param final teste de comentário;
    *  */
    Bicicleta.prototype.pedalar = function (final) {
        if (this.velocidade + final <= 70) {
            this.velocidade += final;
        }
        else {
            this.velocidade == 70;
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
b1.pedalar(60);
b1.pedalar(40);
console.log(b1.obterVelocidade());
