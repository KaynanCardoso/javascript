const inscricoes = [
  { aluno: 'Ana', curso: 'JavaScript', horas: 40, valor: 320, concluido: true },
  { aluno: 'Bruno', curso: 'Node.js', horas: 30, valor: 280, concluido: false },
  { aluno: 'Carla', curso: 'JavaScript', horas: 40, valor: 320, concluido: true },
  { aluno: 'Diego', curso: 'TypeScript', horas: 25, valor: 240, concluido: true },
  { aluno: 'Elisa', curso: 'Node.js', horas: 30, valor: 280, concluido: false },
];

const etiquetasDeCertificado = inscricoes.map(
  ({ aluno, curso, horas }) => `${aluno} — ${curso} (${horas}h)`,
);

const inscricoesConcluidas = inscricoes.filter((inscricao) => inscricao.concluido);

const receitaTotal = inscricoes.reduce((total, inscricao) => total + inscricao.valor, 0);

const horasPorCurso = inscricoes.reduce((acumulado, { curso, horas }) => {
  acumulado[curso] = (acumulado[curso] ?? 0) + horas;
  return acumulado;
}, {});

const ordenarPor = (campo) => (umItem, outroItem) =>
  String(umItem[campo]).localeCompare(String(outroItem[campo]));

const compor = (...funcoes) => (valorInicial) =>
  funcoes.reduceRight((valor, funcao) => funcao(valor), valorInicial);

const aplicarReajuste = (percentual) => (valor) => valor * (1 + percentual);
const arredondarParaReal = (valor) => Math.round(valor);
const formatarEmReais = (valor) => `R$ ${valor},00`;

const precificar = compor(formatarEmReais, arredondarParaReal, aplicarReajuste(0.12));

const alunosEmOrdem = inscricoes.toSorted(ordenarPor('aluno')).map(({ aluno }) => aluno);
const todosPagaramAcimaDeDuzentos = inscricoes.every(({ valor }) => valor > 200);
const existeCursoLongo = inscricoes.some(({ horas }) => horas >= 40);

console.log('Etiquetas geradas com map:', etiquetasDeCertificado);
console.log('Inscrições concluídas com filter:', inscricoesConcluidas.length);
console.log('Receita total com reduce:', receitaTotal);
console.log('Horas por curso com reduce:', horasPorCurso);
console.log('Alunos ordenados por função geradora de comparador:', alunosEmOrdem);
console.log('Preço reajustado por composição de funções:', precificar(320));
console.log('Todos pagaram acima de 200?', todosPagaramAcimaDeDuzentos);
console.log('Existe curso com 40h ou mais?', existeCursoLongo);
