// VARIAVEIS E CONSTANTES
let variavel1 = 10;
var variavel2 = 30;

const pi = 3.14;

console.log(variavel1);

//EXERCICIO
let precoCombustivel = 3.99;
let gastoCombustivelPorKm = 10;
const distanciaKm = 450;
const rendimentoCombustivel = precoCombustivel / gastoCombustivelPorKm;

let gastoTotalViagem = rendimentoCombustivel * distanciaKm;

console.log(`Gasto com a viagem em reais R$ ${gastoTotalViagem.toFixed(2)}`);
