// EXERCICIO 1 - MEDIA 3 NOTAS DE UM ALUNO
let nota1 = 4;
let nota2 = 3;
let nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;
console.log('-------------------');
console.log(`Média: ${media.toFixed(2)}`);

if (media > 7) {
  console.log('Aprovado');
} else if (media >= 5 && media <= 7) {
  console.log('Recuperação');
} else {
  console.log('Reprovado');
}

console.log('-------------------');
// EXERCICIO 2 - CALCULO DO IMC
let peso = 120;
let altura = 1.96;

const imc = peso / Math.pow(altura, 2);    // imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do Peso');
} else if (imc >= 30 && imc < 40) {
  console.log('Obeso');
} else {
  console.log('Obesidade Grave');
}

console.log('-------------------');
// EXERCICIO 3 - VALOR PAGO EM UM PRODUTO
/**
 * FORMAS DE PAGAMENTO:
 * 1 - Débito
 * 2 - Dinheiro ou PIX
 * 3 - Crédito 2 vezes sem juros
 * 4 - Crédito com 10% juros
 */
let precoProduto = 250.00;
let tipoPagamento = 3;

if (tipoPagamento === 1) {
  let totalAPagar = precoProduto - (precoProduto * 0.10);
  console.log(`Total a Pagar: ${totalAPagar.toFixed(2)}`);
} else if (tipoPagamento === 2) {
  let totalAPagar = precoProduto - (precoProduto * 0.15);
  console.log(`Total a Pagar: ${totalAPagar.toFixed(2)}`);
} else if (tipoPagamento === 3) {
  let totalAPagar = precoProduto;
  console.log(`Total a Pagar: ${totalAPagar.toFixed(2)}`);
} else {
  let totalAPagar = precoProduto + (precoProduto * 10 / 100);
  console.log(`Total a Pagar: ${totalAPagar.toFixed(2)}`);
}