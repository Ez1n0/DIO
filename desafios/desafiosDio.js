//Quadrado de Pares

/* let lines = gets(6,0).split('\n');

var N = parseInt(lines.shift());
for (let i = 2; i <= N; i++) {
	if (i % 2 == 0) {
	  print(i + "^" + "2" + " = " + Math.pow(i,2));    //escreva sua lógica nos espaços em branco
	}
}
*/

//Resto 2

/*
let lines = gets(13).split('\n');

let N = parseInt(lines.shift());
for (i = 1; i < 10000; i++) {
	if (i % N == 2) print(i);
}
*/

//Nossos Dias Nunca Voltarão

/*

let lines = gets(3).split("\n");
const str = ['LIFE IS NOT A PROBLEM TO BE SOLVED'];
let n = parseInt(lines.shift());
var certo = [];

//escreva o seu código aqui
for (i = 0; i < n; i++) {
      
      certo = certo + str[0][i];
}

print(certo);

*/

//Tomadas

/*
let lines = gets().split("\n");
let tomada = [];
var dispo = 0;
let line = lines.shift().split(' ');
tomada = line;

//escreva aqui o seu código

for (i = 0; i < tomada.length; i++){
       dispo = dispo + parseInt(tomada[i]);
}

print(dispo - 3);
*/

//Polígonos

/*
let lines = gets().split("\n");
let line =lines.shift().split(' ');
let N1 = line[0];
let N2 = line[1];


print(N1 * N2);

*/