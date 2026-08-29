const nomeDoAluno = 'Ana Beatriz';
const notaFinal = 9.45;
const foiAprovado = true;
const certificadoEmitido = null;
let observacoes;
const identificadorUnico = Symbol('matricula');
const totalDeAlunosNaHistoria = 9007199254740993n;

const tiposPrimitivos = {
  string: typeof nomeDoAluno,
  number: typeof notaFinal,
  boolean: typeof foiAprovado,
  undefined: typeof observacoes,
  symbol: typeof identificadorUnico,
  bigint: typeof totalDeAlunosNaHistoria,
  objetoNulo: typeof certificadoEmitido,
};

const notaEmTexto = '8.75';
const notaConvertida = Number(notaEmTexto);
const notaInvalida = Number('nota nove');

const boletim = { aluno: nomeDoAluno, nota: notaFinal };
const disciplinas = ['Algoritmos', 'Estruturas de Dados'];

console.log('Tipos primitivos identificados:', tiposPrimitivos);
console.log('typeof de array:', typeof disciplinas, '| Array.isArray:', Array.isArray(disciplinas));
console.log('typeof de objeto:', typeof boletim);
console.log(`Conversão de "${notaEmTexto}" para número: ${notaConvertida}`);
console.log('Conversão inválida gera NaN?', Number.isNaN(notaInvalida));
console.log('Nota final é um inteiro?', Number.isInteger(notaFinal));
console.log('Diferença entre null e undefined:', certificadoEmitido === observacoes, '| igualdade frouxa:', certificadoEmitido == observacoes);
console.log('Descrição do Symbol:', identificadorUnico.description);
console.log('BigInt preserva precisão:', totalDeAlunosNaHistoria.toString());
