const turma = [
  { matricula: 101, nome: 'Ana', notas: [9.5, 8.0], ativo: true },
  { matricula: 102, nome: 'Bruno', notas: [6.0, 7.5], ativo: true },
  { matricula: 103, nome: 'Carla', notas: [10, 9.0], ativo: false },
];

const [primeiroAluno, ...demaisAlunos] = turma;
const { nome: nomeDoPrimeiro, notas: notasDoPrimeiro } = primeiroAluno;
const [notaInicial, notaFinal] = notasDoPrimeiro;

const alunoNovo = { matricula: 104, nome: 'Diego', notas: [7.0, 8.5], ativo: true };
const turmaAtualizada = [...turma, alunoNovo];

const nomesDosDemais = [];
for (const aluno of demaisAlunos) {
  nomesDosDemais.push(aluno.nome);
}

const matriculasAtivas = [];
const indicePorMatricula = {};
for (const aluno of turmaAtualizada) {
  indicePorMatricula[aluno.matricula] = aluno.nome;
  if (aluno.ativo) {
    matriculasAtivas.push(aluno.matricula);
  }
}

const alunoComEndereco = {
  ...alunoNovo,
  endereco: { cidade: 'Curitiba', estado: 'PR' },
};

const { endereco: { cidade: cidadeDoAluno } } = alunoComEndereco;

const posicaoDeCarla = turmaAtualizada.indexOf(turma[2]);
const turmaSemCarla = turmaAtualizada.toSpliced(posicaoDeCarla, 1);
const turmaOrdenadaPorNome = turmaAtualizada.toSorted((umAluno, outroAluno) =>
  umAluno.nome.localeCompare(outroAluno.nome),
);

const chavesDoAluno = Object.keys(alunoNovo);
const configuracaoImutavel = Object.freeze({ maximoDeFaltas: 15 });
configuracaoImutavel.maximoDeFaltas = 30;

console.log('Primeiro aluno:', nomeDoPrimeiro, '| notas:', notaInicial, notaFinal);
console.log('Demais alunos:', nomesDosDemais);
console.log('Turma após inclusão imutável:', turmaAtualizada.length, 'alunos');
console.log('Matrículas ativas:', matriculasAtivas);
console.log('Cidade extraída por desestruturação aninhada:', cidadeDoAluno);
console.log('Turma sem Carla:', turmaSemCarla.length, 'alunos');
console.log('Ordem alfabética preservando o array original:', turmaOrdenadaPorNome[0].nome);
console.log('Chaves do objeto aluno:', chavesDoAluno);
console.log('Índice por matrícula:', indicePorMatricula);
console.log('Objeto congelado permanece intacto:', configuracaoImutavel);
console.log('A turma original continua com', turma.length, 'alunos');
