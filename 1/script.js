let idade = [];
let soma = 0;


for (let i = 0; i < 8; i++) {
    let idades = Number(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades[i] = idade
    soma = soma + idades[i];
}

let media = soma / 8;
alert("Média das idades:" + media);