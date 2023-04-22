const peso = 55;
const altura = 1.67;
const imc = peso / Math.pow(altura, 2);
console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5){
    console.log("Abaixo do peso :c");
} else if (imc >= 18.5 && imc < 25){
    console.log("Peso normal c: ");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso :c");
} else if (imc >= 30 && imc < 40) {
    console.log("O B E S O !!");
} else {
    console.log("Obesidade grave :'(");
}