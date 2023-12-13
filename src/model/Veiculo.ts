export class Veiculo {

    // atributos da classe
    private placa: string;
    private modelo: string;
    private combustivel: string;
    private rodas: number;
    private altura: number;
    private marca: string;
    private kmrodado: number;
    private eixos: number;
    private capacidadecarga: number;
    private tipocarga: string;
    private numeroportas: number;
    private tipo: string;

    // método construtor
    public constructor(_placa: string, _modelo: string, _combustivel: string, _rodas: number, _altura: number, _marca: string, _kmrodado: number, _eixos: number, _capacidadecarga: number, _tipocarga: string, _numeroportas: number, _tipo: string) {
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

    public getPlaca() {
        return this.placa;
    }

    public setPlaca(_placa: string) {
        this.placa = _placa;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(_modelo: string) {
        this.modelo = _modelo;
    }

    public getCombustivel() {
        return this.combustivel;
    }

    public setCombustivel(_combustivel: string) {
        this.combustivel = _combustivel;
    }

    public getRodas() {
        return this.rodas;
    }

    public setRodas(_rodas: number) {
        this.rodas = _rodas;
    }

    public getAltura() {
        return this.altura;
    }

    public setAltura(_altura: number) {
        this.altura = _altura;
    }

    public getMarca() {
        return this.marca;
    }

    public setMarca(_marca: string) {
        this.marca = _marca;
    }

    public getKmRodado() {
        return this.kmrodado;
    }

    public setKmRodado(_kmrodado: number) {
        this.kmrodado = _kmrodado;
    }

    public getEixos() {
        return this.eixos;
    }

    public setEixos(_eixos: number) {
        this.eixos = _eixos;
    }

    public getCapacidadeCarga() {
        return this.capacidadecarga
    }

    public setCapacidadeCarga(_capacidadecarga: number){
        this.capacidadecarga = _capacidadecarga
    }

    public getTipoCarga() {
        return this.tipocarga
    }

    public setTipoCarga(_tipocarga: string) {
        this.tipocarga = _tipocarga
    }

    public getNumeroPortas(){
        return this.numeroportas
    }

    public setNumeroPortas(_numeroportas: number) {
        this.numeroportas = _numeroportas
    }

    public getTipo () {
        return this.tipo
    }

    public setTipo (_tipo: string) {
        this.tipo = _tipo
    }

    public acelerar(velocidade: number): void {
        console.log(`Veículo acelerando a ${velocidade} km/h.`);
    }

    public frear(): void {
        console.log('Veículo freando.');
    }

    public mostraVeiculo() {
        console.log(
            `Placa: ${this.placa}
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
            Tipo: ${this.tipocarga}`)

    }

}