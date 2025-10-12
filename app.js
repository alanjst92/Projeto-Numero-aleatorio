alert('Boas vindas ao nosso site!');
let nome = prompt("Digite seu nome");
let idade = prompt("Informe sua idade");
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos.');
let mensagemDeErro = "Erro! Preencha todos os campos";

if(idade >= 18 ){
    alert('Pode tirar habilitação!');
}else{
    alert('Não pode tira habilitação!');
}