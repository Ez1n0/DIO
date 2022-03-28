function conferencia(){
    let num1 = Number(prompt('Digite o primeiro número:'));
    let num2 = Number(prompt('Digite o segundo número:'));
    let resultado;

    resultado = num1 + num2;

if (num1 === num2){
    if (resultado <= 10) {
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é menor que 10 e menor que 20`))
    } else if (resultado > 10 || resultado <= 20){
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é maior que 10 e menor que 20`))
    } else {
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é maior que 10 e maior que 20`))
    }

} else {
    if (resultado <= 10) {
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é menor que 10 e menor que 20`))
    } else if (resultado > 10 && resultado <= 20){
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é maior que 10 e menor que 20`))
    } else {
        (alert(`${num1} e ${num2} são iguais. Sua soma é ${resultado} que é maior que 10 e maior que 20`))
    }
}

    //(num1 === num2) ? (alert(`${num1} e ${num2} são iguais`)) : (alert(`${num1} e ${num2} não são iguais`));



}

conferencia()