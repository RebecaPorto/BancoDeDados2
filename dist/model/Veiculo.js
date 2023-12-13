"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    // método construtor
    constructor(_placa, _modelo, _combustivel, _rodas, _altura, _marca, _kmrodado, _eixos, _capacidadecarga, _tipocarga, _numeroportas, _tipo) {
        this.placa = _placa;
        this.modelo = _modelo;
        this.combustivel = _combustivel;
        this.rodas = _rodas;
        this.altura = _altura;
        this.marca = _marca;
        this.kmrodado = _kmrodado;
        this.eixos = _eixos;
        this.capacidadecarga = _capacidadecarga;
        this.tipocarga = _tipocarga;
        this.numeroportas = _numeroportas;
        this.tipo = _tipo;
    }
    // métodos GETTERS and SETTERS
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
    getCapacidadeCarga() {
        return this.capacidadecarga;
    }
    setCapacidadeCarga(_capacidadecarga) {
        this.capacidadecarga = _capacidadecarga;
    }
    getTipoCarga() {
        return this.tipocarga;
    }
    setTipoCarga(_tipocarga) {
        this.tipocarga = _tipocarga;
    }
    getNumeroPortas() {
        return this.numeroportas;
    }
    setNumeroPortas(_numeroportas) {
        this.numeroportas = _numeroportas;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    acelerar(velocidade) {
        console.log(`Veículo acelerando a ${velocidade} km/h.`);
    }
    frear() {
        console.log('Veículo freando.');
    }
    mostraVeiculo() {
        console.log(`Placa: ${this.placa}
            Modelo: ${this.modelo}
            Combustivel:  ${this.combustivel}
            Rodas: ${this.rodas}
            Altura: ${this.altura}
            Marca: ${this.marca}
            KmRodado: ${this.kmrodado}
            Eixos: ${this.eixos}
            Capacidade Carga: ${this.capacidadecarga}
            Tipo Carga: ${this.tipocarga}
            Numero Portas: ${this.numeroportas}
            Tipo: ${this.tipocarga}`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map