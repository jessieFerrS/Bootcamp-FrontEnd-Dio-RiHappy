// Arrays e Estruturas de repetição

const alunos = ['Ana', 'Bia', 'Carlos', 'Daniel'];

alunos.push('Ester');
alunos[5] = 'Fábio';
console.log(alunos);

alunos.pop();
console.log(alunos);
console.log(alunos.length);
console.log('----------------------');

const notas = [];

notas.push(5);
notas.push(7);
notas.push(6);
notas.push(8);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

console.log('----------------------------');

// FOR
for (let i = 0; i < 10; i++) {
  console.log(i);
}

