let array = ['valor1','valor2','valor3','valor4','valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}


//Neste "for" é contado a quantidade de itens dentro do array e a saída será tipo númerico por conta do length.
for(let indice = 0; indice < array.length; indice++){
    console.log(typeof(indice))
    console.log(indice);
}

//for in - executa repetição a partir de uma propriedade com array. A saída será do tipo string por conta da propriedade da array(string) e do objeto(string)

for(let i in array){
    console.log(typeof(i));
    console.log(i);

}

for(i in object){
    console.log(typeof(i));
    console.log(i);

}

//For of - executa repetição a partir de valor do array
for (i of array){
    console.log(i)

}

for(i of object.propriedade1){
    console.log(i)

}