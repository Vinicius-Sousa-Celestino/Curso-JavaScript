const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`; // .charAt(1)
document.body.innerHTML += `Qual o primeiro índice da letra I no seu nome? ${nome.indexOf('i')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra I no seu nome? ${nome.lastIndexOf('i')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`;

window.document.body.innerHTML += `O seu nome é ${nome}<br/>`;