//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome completo: ");
let ano_valido=false
while (ano_valido===false){
    const ano = parseInt(prompt("Digite o ano que você nasceu (1922-2022): "));
    if (ano<1922||ano>2021){
        console.log("Ano inválido! Digite um ano válido!")
        ano_valido=false;
    }else if(isNaN(ano)===true){
        console.log("Ano inválido! Digite apenas números!")
        ano_valido=false;
    }else{
        ano_valido=true;
        idade = 2022-ano;
console.log(`${nome} tem ${idade} anos em 2022`)
    }
}

