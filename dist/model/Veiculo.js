"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    //método construtor
    constructor(_placa, _modelo, _combustivel, _rodas, _altura, _marca, _kmrodado, _eixos) {
        this.placa = _placa;
        this.modelo = _modelo;
        this.combustivel = _combustivel;
        this.rodas = _rodas;
        this.altura = _altura;
        this.marca = _marca;
        this.kmrodado = _kmrodado;
        this.eixos = _eixos;
    }
    // métodos GETTERS and SETTERS
    /**
     * Retorna o nome da pessoa
     *
     * @returns veiculo : placa
 */
    getPlaca() {
        return this.placa;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getRodas() {
        return this.rodas;
    }
    setRodas(_rodas) {
        this.rodas = _rodas;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getKmRodado() {
        return this.kmrodado;
    }
    setKmRodado(_kmrodado) {
        this.kmrodado = _kmrodado;
    }
    getEixos() {
        return this.eixos;
    }
    setEixos(_eixos) {
        this.eixos = _eixos;
    }
    mostraVeiculo() {
        console.log(`Placa: ${this.placa}
    Modelo: ${this.modelo}
    Combustivel:  ${this.combustivel}
    Rodas: ${this.rodas}
    Altura: ${this.altura}
    Marca: ${this.marca}
    KmRodado: ${this.kmrodado}
    Eixos: ${this.eixos}`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map