/* Calcular o valor de uma viagem:
1. preço do combustivel;
2. gasto médio de combustível por KM
3. distancia em KM da viagem
*/

let valor;
const precoCombustivel = 3;
const kmPorLitro = 1;
const distanciaEmKm = 500;
const litrosConsumidos = distanciaEmKm / kmPorLitro;

valor = precoCombustivel * litrosConsumidos;

console.log(valor.toFixed(2));