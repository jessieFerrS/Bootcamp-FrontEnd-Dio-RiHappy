// INICIO DE ORIENTAÇÃO A OBJETOS

// CLASSE
class Pessoa {
  nome;
  idade;
  altura;

  constructor(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.anoDeNascimento = 2024 - idade;
  }

  descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const ana = new Pessoa('Ana', 38, 1.67);
console.log(ana);
ana.descrever();


function compararPessoas(p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velh@ que ${p2.nome}`);
  } else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velh@ que ${p1.nome}`);
  } else{
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const bia = new Pessoa('Bia', 25, 1.60);
const carlos = new Pessoa('Carlos', 45, 1.80);

compararPessoas(bia, carlos);

// OBJETO
/*const ana = {
  nome: 'Ana Andrade',
  idade: 35,
  altura: 1.65,
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
};

console.log(ana.nome);
console.log(ana.idade);

ana.descrever();
console.log(ana['nome']);*/

