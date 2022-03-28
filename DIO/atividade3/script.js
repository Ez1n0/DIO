//Método MAP


/*const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapSemThis(arr){
    return arr.map(function(item){
        return item*2;
    });
}*/

/*function mapComThis(arr, thisArg){
    return arr.map(function(item) {
      return  item * this.value;
    }, thisArg);
}*/

//const nums = [2,4,6,8,10];

//console.log('this ->maçã ', mapSemThis(nums, maca));

//console.log('this ->laranja ', mapSemThis(nums, laranja));

//console.log(mapSemThis(nums));

//console.log(nums);


//****************************************Método filter************************************************

/*function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    //return item % 2 ===0; // -> Números pares
    return item % 2 !==0; // -> Números impares
}

const meuArray = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));*/

// *******************************************Método Reduce **************************************************

/*function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const arr = [1,2];

console.log(somaNumeros(arr)); */

//*******************************************************atividade adicional com reduce***********************************

const lista = [
    {
        name:  'sabao em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100;
function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        return prev - current.preco;

    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));