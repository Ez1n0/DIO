//let array = ['string', 1, true];
//console.log(array);

let array = ['string', 1, true,['array1'],['array2'],['array3']];
console.log(array[0]);
//array.forEach(function(item, index){console.log(item, index)});
//array.push('novo item');
//array.pop();
//array.shift();
//array.unshift('New item');
//array.splice(0, 3);    
//let novoArray = array.splice(0, 3);

let object = {string:'string', number: 2, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objectInterno'}};

//console.log(object.objectInterno);

//var string = object.string;
//console.log(string);

var arrayInterno = object.array;
//console.log(arrayInterno);

var {string,Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);



