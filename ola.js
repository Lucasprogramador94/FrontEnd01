function imprimireceita(){
    const receita =  `1 Cozinha a salsicha
    2 Retirar a salsisha após 15 min 
    3 Fazer o molho com tempero a gosto 
    4 Mesturar o molho com a salsicha
    5 Cortar o pão
    6 Por a salsicha com o molho dentro do pão
    7 comer`;

    console.log(receita);
    return receita;
}

let receitaFinal = imprimireceita();

receitaFinal = receitaFinal.replaceAll("a","u");
receitaFinal = receitaFinal.replaceAll("e","u");

console.log(receitaFinal)

function letraGrande(palavra){
    let resultado = palavra.toUpperCase();

    console.log(resultado);
    return resultado;
}

letraGrande(receitaFinal);
letraGrande("Lucas");
let nome = "Lucas"
console.log(nome.length);
console.log(nome[4]);