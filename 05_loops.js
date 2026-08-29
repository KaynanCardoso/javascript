const disciplinas = ['Algoritmos', 'Banco de Dados', 'Redes', 'Compiladores'];
const cargaHorariaPorDisciplina = { Algoritmos: 80, 'Banco de Dados': 60, Redes: 40 };

let somaDosPrimeirosPares = 0;
for (let numero = 1; numero <= 20; numero += 1) {
  if (numero % 2 !== 0) {
    continue;
  }
  if (somaDosPrimeirosPares + numero > 30) {
    break;
  }
  somaDosPrimeirosPares += numero;
}

const nomesEmMaiusculas = [];
for (const disciplina of disciplinas) {
  nomesEmMaiusculas.push(disciplina.toUpperCase());
}

const listaDeCargas = [];
for (const [disciplina, horas] of Object.entries(cargaHorariaPorDisciplina)) {
  listaDeCargas.push(`${disciplina}: ${horas}h`);
}

const posicoesNoIndice = [];
for (const [indice, disciplina] of disciplinas.entries()) {
  posicoesNoIndice.push(`${indice + 1}. ${disciplina}`);
}

let creditosRestantes = 10;
let semestresNecessarios = 0;
while (creditosRestantes > 0) {
  creditosRestantes -= 4;
  semestresNecessarios += 1;
}

let tentativasDeMatricula = 0;
do {
  tentativasDeMatricula += 1;
} while (tentativasDeMatricula < 3);

const paresDeEstudo = [];
for (let primeiro = 0; primeiro < 3; primeiro += 1) {
  for (let segundo = primeiro + 1; segundo < 3; segundo += 1) {
    paresDeEstudo.push(`${disciplinas[primeiro]} + ${disciplinas[segundo]}`);
  }
}

console.log('Soma dos pares até estourar o limite de 30:', somaDosPrimeirosPares);
console.log('Disciplinas em maiúsculas:', nomesEmMaiusculas);
console.log('Carga horária percorrida por entradas:', listaDeCargas);
console.log('Disciplinas numeradas:', posicoesNoIndice);
console.log('Semestres necessários (while):', semestresNecessarios);
console.log('Tentativas de matrícula (do...while):', tentativasDeMatricula);
console.log('Pares de estudo formados:', paresDeEstudo);
