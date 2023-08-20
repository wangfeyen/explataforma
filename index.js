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

