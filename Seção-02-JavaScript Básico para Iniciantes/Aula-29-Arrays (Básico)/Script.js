const alunos = ["João", "Vinícius", "Luiz"];
alunos[0] = "Ana";
alunos[3] = "Ramon";

alunos.push("Vitor");

alunos.unshift("Maria");

console.log(alunos.length);
console.log(alunos);

alunos.pop();
alunos.shift();
const removido = alunos.pop()
removido = alunos.shift()

delete alunos[1];

console.log(alunos instanceof Array);
