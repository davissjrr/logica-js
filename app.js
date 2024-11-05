alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    console.log(`´Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}!`)
    } else {
        alert(`O número secreto é maior que ${chute}!`)
    } 
}

//alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
//let chute = prompt('Escolha um número entre 1 e 10');
//console.log('Valor do chute:', chute);

//let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
//console.log('Resultado da comparação:', chute == numeroSecreto);

//if (chute == numeroSecreto) {
//    alert('Acertou');
//} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
//    console.log('Valor do número secreto:', numeroSecreto);
//    alert('O número secreto era ' + numeroSecreto);
//}


// Exercício 1
//alert('Opa, tudo bem?');
//let diaDaSemana = prompt('Me diga: em que dia da semana estamos?');
//console.log(fimDeSemana);

//if (diaDaSemana == 'Sábado') {
//    alert('Bom final de semana!');
//    console.log('Bom final de semana!');
//} else if (diaDaSemana == 'Domingo') {
//    alert('Bom final de semana!');
//    console.log('Bom final de semana!'); 
//} else {
//    alert('Boa semana! Agora vai trabalhar, vagabundokk');
//    console.log('Boa semana! Agora vai trabalhar, vagabundokk');
//}

// Exercício 2
//let numeroInserido = prompt('Digite um número para verificarmos se ele é positivo ou negativo:');

//if (numeroInserido >= 0) {
//    alert('Este número é positivo!');
//} else {
//    alert('Este número é negativo!');
//}

// Exercício 3
//let pontuacao = 95;
//if (pontuacao >= 100) {
//    alert("Você venceu!");
//    console.log('Você venceu!');
//} else {
//    alert('Tente novamente pra ganhar');
//    console.log('Tente novamente pra ganhar');
//}

// Exercício 4
//let saldoConta = 10000;
//alert(`Seu saldo é de R$${saldoConta}.`);

// Exercício 5
//let nome = prompt('Qual é o seu nome?');
//alert(`Seja bem-vindo, ${nome}!`);