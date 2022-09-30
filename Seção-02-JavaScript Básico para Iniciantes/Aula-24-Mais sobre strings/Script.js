let umaString = "Vinícius";

console.log(umaString[2]);

console.log(umaString.charAt(6));

console.log(umaString.concat('  Sousa'));
console.log(umaString + '  Sousa');
console.log(`${umaString}  Sousa`);

console.log(umaString.indexOf('u')); //Encontrando letra no índice
console.log(umaString.lastIndexOf('u', 8)); //Encontrando letra no índice

console.log(umaString.match(/[a-z]/g)); //Retorna letras minúsculas
console.log(umaString.search(/[a-z]/g)); 
console.log(umaString.replace(/in/, 'a')); //Se inserir a flag g ele substitui todas as letras
console.log(umaString.length); //Retorna o tamanaho
console.log(umaString.slice(2, 5)); //Retorna somente o pedaço do índice especifícado
console.log(umaString.slice(-3)); //O start pode ser negativo
console.log(umaString.slice(-3, umaString.length -1));
console.log(umaString.substring(umaString.length -5, umaString.length -1));

console.log(umaString.split('i'));

console.log();


