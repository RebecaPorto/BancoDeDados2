"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Veiculo_1 = require("../model/Veiculo");
const bancoDeDados_1 = require("../controller/bancoDeDados");
(0, bancoDeDados_1.inicializarVeiculos)();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
app.get('/veiculo', (req, res) => {
    const listaDeVeiculos = (0, bancoDeDados_1.listarVeiculos)();
    console.log(`Retornando a lista de veiculos cadastrados`);
    res.json(listaDeVeiculos);
});
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
app.post('/cadastro', (req, res) => {
    const { placa, modelo, combustivel, rodas, altura, marca, kmrodado, eixos } = req.body;
    const veiculo = new Veiculo_1.Veiculo(placa, modelo, combustivel, rodas, altura, marca, kmrodado, eixos);
    console.log(veiculo);
    (0, bancoDeDados_1.persistirVeiculos)(veiculo);
    res.json({ mensagem: "Veiculo cadastrado com sucesso" });
});
//# sourceMappingURL=app.js.map