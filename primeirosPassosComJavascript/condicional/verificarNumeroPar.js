const numeroVerificado = 155;
const condicaoPar = 0;

if ((numeroVerificado % 2) === condicaoPar) {
    console.log("Número par!");
} else {
    console.log("Número ímpar!");
}

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log("O número é inválido!");
} else if (numero === 5) {
    console.log("O número é inválido!");
} else if (numeroDivisivelPor5) {
    console.log("Sim");
} else {
    console.log("Não");
}