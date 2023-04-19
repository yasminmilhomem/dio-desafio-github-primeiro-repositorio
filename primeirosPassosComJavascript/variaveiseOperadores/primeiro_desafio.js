/* Calcular o valor de uma viagem:
1. preço do combustivel;
2. gasto médio de combustível por KM
3. distancia em KM da viagem
*/

let valor;
const precoCombustivel = 6;
const kmPorLitro = 2;
const distanciaEmKm = 500;
const litrosConsumidos = distanciaEmKm / kmPorLitro;

valor = precoCombustivel * litrosConsumidos;

console.log(valor);