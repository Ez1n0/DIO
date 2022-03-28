//tipos de função

function funcao1(){
    console.log('Salve!')

}

funcao1();
//funcao de expressão

var funcao = function(){
    console.log('Sou uma mensagem de função de expressão!');
}

funcao();

//arrow function - Serão sempre anonimas

var funcao2 = () => {
    console.log('Sou uma arrow function!');
}

funcao2();