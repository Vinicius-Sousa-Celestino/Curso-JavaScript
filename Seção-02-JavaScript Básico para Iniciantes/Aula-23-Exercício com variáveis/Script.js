let varA = 'a';
let varB = 'b';
let varC = 'c';

const varAtemp = varA;
varA = varB; //b
varB = varC; //c
varC = varAtemp; //a

let varD = 'd'; //e
let varE = 'e'; //f
let varF = 'f'; //d

[varD, varE, varF] = [varE, varF, varD]; //Mais moderno

console.log(varD, varE, varF);