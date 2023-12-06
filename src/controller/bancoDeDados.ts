
import { Veiculo } from "../model/Veiculo";

let bancoDadosVeiculo: Veiculo[] = [];


export function persistirVeiculos(veiculo: Veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
}

}
export function listarVeiculos() {
    return bancoDadosVeiculo;
}

export function inicializarVeiculos() {
    bancoDadosVeiculo.push(
      new Veiculo('JHGHFDYTL','Fastback','Alcool',4, 6777,'FIAT',60000, 1));
    
    bancoDadosVeiculo.push(
        new Veiculo('GKJGGIUY','Montana','Gasolina',4, 4555,'Chevrolet',45000,1));
    
    bancoDadosVeiculo.push(
        new Veiculo('KJFYTDS','Tiguan','Alcool',4, 2333, 'Volkswagen',18000,1));
    
    bancoDadosVeiculo.push(
        new Veiculo('JJHGKPO','Hybrid','GAsolina',4, 8999,'Honda Civic',15000,1));

 
            
    
}
 