const nomeDoCurso = 'Fundamentos de JavaScript';
let modulosConcluidos = 3;

modulosConcluidos = modulosConcluidos + 1;

const configuracaoDoAluno = { nivel: 'iniciante', ativo: true };
configuracaoDoAluno.nivel = 'intermediario';

let mensagemDeEscopo = 'valor do escopo externo';

{
  const mensagemDeEscopo = 'valor do escopo do bloco';
  console.log('Dentro do bloco:', mensagemDeEscopo);
}

const TAXA_DE_MATRICULA = 120;
let descontoDeBolsa = 0.25;
const valorPago = TAXA_DE_MATRICULA * (1 - descontoDeBolsa);

console.log('Fora do bloco:', mensagemDeEscopo);
console.log(`Curso: ${nomeDoCurso}`);
console.log(`Módulos concluídos: ${modulosConcluidos}`);
console.log('Objeto declarado com const após alteração:', configuracaoDoAluno);
console.log(`Valor pago com bolsa: R$ ${valorPago.toFixed(2)}`);
