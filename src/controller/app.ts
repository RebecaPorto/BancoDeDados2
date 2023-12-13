import express from "express";
import cors from 'cors';
import { Veiculo } from "../model/Veiculo";
import { inicializarVeiculos, listarVeiculos, persistirVeiculos } from "../controller/bancoDeDados";

inicializarVeiculos();

const app = express();

const port: number = 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

app.get('/veiculo', (req, res) => {
    const listaDeVeiculos = listarVeiculos();

    console.log(`Retornando a lista de veículos cadastrados`);

    res.json(listaDeVeiculos);
});

app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});

app.post('/cadastro', (req, res) => {
   
    const { placa, modelo, combustivel, rodas, altura, marca, kmrodado, eixos, capacidadecarga, tipocarga, numeroportas, tipo } = req.body;

    const veiculo = new Veiculo(placa, modelo, combustivel, rodas, altura, marca, kmrodado, eixos, capacidadecarga, tipocarga, numeroportas, tipo);

    console.log(veiculo);

    persistirVeiculos(veiculo);

    res.json({ mensagem: "Veículo cadastrado com sucesso" });
});