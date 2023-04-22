const etanolPreco = 4.31;
const gasolinaPreco = 4.61;
const kmPorLitro = 1;
const distanciaEmKm = 201;
const litrosConsumidos = distanciaEmKm / kmPorLitro;
let resultado;
let tipoCombustivel = 'etanol';


if (tipoCombustivel === 'gasolina'){
    resultado = (gasolinaPreco * litrosConsumidos);
    console.log(resultado.toFixed(2));
} else if (tipoCombustivel === 'etanol'){
    resultado = (etanolPreco * litrosConsumidos);
    console.log(resultado.toFixed(2));
}