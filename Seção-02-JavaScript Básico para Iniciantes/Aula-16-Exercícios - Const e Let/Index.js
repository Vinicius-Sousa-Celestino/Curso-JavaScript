/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = "Vinícius";
const sobrenome = "Sousa"
const idade = 18;
const peso = 65;
const altura = 1.77
let imc; //peso / (altura * altura)
let anoNascimento;

imc  = peso / (altura * altura);

//console.log("Índice de massa corporal =", imc);

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
anoNascimento = anoAtual - idade;

//console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);