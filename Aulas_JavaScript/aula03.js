// FUNÇÕES
// sem uso de parametros
function teste() {
  console.log('teste');
}

// com uso de parametros
function sayMyName(name) {
  console.log('Seu nome é ' + name);
}

function quadrado(valor) {
  return valor * valor;

}

function incrementarJuros(valor, precentualJuros) {
  const valorDeAcrescimo = (precentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

//evocando a função
teste();
sayMyName('Ana');
console.log(quadrado(8));
console.log(incrementarJuros(100, 10));
console.log('-----------------------');

//Organizando o codigo
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do Peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso Normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do Peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else {
    return 'Obesidade Grave';
  }
}

function main() {
  const peso = 118;
  const altura = 1.75;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
}

main();

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}


let precoProduto = 250.00;
let tipoPagamento = 4;

if (tipoPagamento === 1) {
  console.log(`${(aplicarDesconto(precoProduto, 10)).toFixed(2)}`);
} else if (tipoPagamento === 2) {
  console.log(`${(aplicarDesconto(precoProduto, 15)).toFixed(2)}`);
} else if (tipoPagamento === 3) {
  let totalAPagar = precoProduto;
  console.log(`Total a Pagar: ${totalAPagar.toFixed(2)}`);
} else {
  console.log(`${(aplicarJuros(precoProduto, 10)).toFixed(2)}`);
}












