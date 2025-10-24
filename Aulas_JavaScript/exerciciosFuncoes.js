// EXERCICIO CARRO
class Carro {
  marca;
  cor;
  gastoCombustivelPorKm;

  constructor(marca, cor, gastoCombustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoCombustivelPorKm = gastoCombustivelPorKm;
  }

  calcularPercurso(distanciaKm, precoCombustivel) {
    return (precoCombustivel / this.gastoCombustivelPorKm) * distanciaKm;
  }
}

const carro = new Carro('Honda', 'Preto', 10);

console.log(carro);

console.log(`${carro.calcularPercurso(450, 3.99).toFixed(2)}`);
console.log('-----------------------------------------------');

// EXERCICIO IMC
class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

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
}

const pessoa = new Pessoa('José', 70, 1.75);
console.log(pessoa);

console.log(`IMC: ${(pessoa.calcularIMC()).toFixed(2)}`);
console.log(`${(pessoa.classificarIMC())}`);
