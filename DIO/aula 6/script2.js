function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (^)\n'));
    console.log(operacao);

    if (!operacao || operacao >= 8){
        alert('Operação inválida! Tente novamente');
            calculadora();
        
    }


    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }

    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a = ${resultado}`)
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a: ${resultado}`)
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
        if(opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert('Até Mais!');
            
        } else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }

    }

    function sai(){
        alert('Até Mais');
        
    }


   /* if (operacao == 1 ){
        soma();
    } else if (operacao ==2){
        subtracao();
    } else if (operacao ==3){
        multiplicacao();
    } else if (operacao ==4){
        divisaoReal();
    } else if (operacao ==5){
        divisaoInteira();
    } else if (operacao ==6){
        potenciacao();
    }*/
    
    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
        case 7:
            sai();
            break;            
    }
}

calculadora();