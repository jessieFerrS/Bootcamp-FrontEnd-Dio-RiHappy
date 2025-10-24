// BOOLEAN E CONDICIONAIS
const numero = 4;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
  console.log('O número é par!');
} else {
  console.log('o número é impar!')
}

//EXERCICIO
//EXERCICIO
let precoEtanol = 3.99;
let precoGasolina = 5.99;
let gastoCombustivelPorKm = 10;
let tipoCombustivel = 'Etanol';
const distanciaKm = 450;

if (tipoCombustivel === 'Gasolina') {
  const rendimentoCombustivel = precoGasolina / gastoCombustivelPorKm;
  let gastoTotalViagem = rendimentoCombustivel * distanciaKm;
  console.log(`Gasto com a viagem em reais R$ ${gastoTotalViagem.toFixed(2)}`);
} else {
  const rendimentoCombustivel = precoEtanol / gastoCombustivelPorKm;
  let gastoTotalViagem = rendimentoCombustivel * distanciaKm;
  console.log(`Gasto com a viagem em reais R$ ${gastoTotalViagem.toFixed(2)}`);
}
