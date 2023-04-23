function calcularIMC (peso, altura) {
    return peso / (Math.pow(altura, 2));
}

function classificarIMC (imc) {
    if (imc < 18.5){
        return("Abaixo do peso :c");
    } else if (imc >= 18.5 && imc < 25){
        return("Peso normal c: ");
    } else if (imc >= 25 && imc < 30) {
        return("Acima do peso :c");
    } else if (imc >= 30 && imc < 40) {
        return("O B E S O !!");
    } else {
        return("Obesidade grave :'(");
    }
}

function main() {
    const imc = calcularIMC(55, 1.67);
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log(classificarIMC(imc));
}

main();