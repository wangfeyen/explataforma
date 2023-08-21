/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, 
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, 
os brancos e nulos. 
*/
function Votacao() {
    let num = 0;
    let x = 0;
    let y = 0;
    let z = 0;
    let branco = 0;
    let numcand = [889,847,515,0];
    let nomecand = ["X","Y","Z","Branco"];
    let votocand = [x,y,z,branco]

    let candidato;

    while (num !== "fim") {
        const prompt = require("prompt-sync")();
        console.log("Lista de candidatos:");
        console.log("candidato_X => 889");
        console.log("candidato_Y => 847");
        console.log("candidato_Z => 515");
        console.log("branco => 0");
        console.log();
        console.log("Digite 'fim' quando terminar a votação");
        num = prompt("Digite o número do seu candidato: ");
        console.log()
        if (num !== "fim") {
            if (isNaN(parseInt(num)) === true) {
                console.log()
                console.log("Candidato inválido!Tente novamente!")
                console.log()
                Votacao();
            }
            if(parseInt(num)!==889 && parseInt(num)!==847 && parseInt(num)!==515){
                candidato="Branco"
            }else{
                for(i=0;i<=3;i++){
                    if (parseInt(num)===numcand[i]){
                        candidato=nomecand[i]
                    }
                }
            }

            console.log(`Seu candidato é ${candidato}?`);
            const confirma = prompt("Digite 's' para CONFIRMAR e 'n' para CANCELAR: ");
    
            if (confirma === "s") {
                for(i=0;i<=3;i++){
                    if(candidato===nomecand[i]){
                        votocand[i]=votocand[i]+1
                    }
                }
                console.log("________________________________________")
                console.log()
                console.log("Próximo eleitor!");
                console.log();
                
            }else{
                console.log("Tente novamente:")
            }
        }
    }

    console.log("___________________________________")
    console.log("Resultado da votação:");
    let vencedor = 0;
    let maior = 0;
    for (i = 0; i <= 3; i++) {
        if (votocand[i] > maior) {
            maior = votocand[i];
            vencedor=i;
        }
    }
    let empate=[]
    for(i=0;i<=3;i++){
        if(votocand[i]===maior){
            empate.push(votocand[i])
        }
    }

    if (nomecand[vencedor]==="Branco"){
        console.log("Eleição cancelada, maior quantidade de votos foi nula!")
    }else if(empate.length>1){
        console.log(`Houve empate!`)
    }else{
        console.log(`O vencedor é ${nomecand[vencedor]}`)
    }
    console.log("Quantidade de votos de cada candidato: ")
    for(i=0;i<=3;i++){
        console.log(`${nomecand[i]} com ${votocand[i]}`)
    }

}
Votacao();
