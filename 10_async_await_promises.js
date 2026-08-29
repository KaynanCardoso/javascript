const bancoDeDadosSimulado = {
  alunos: { 101: { id: 101, nome: 'Ana' }, 102: { id: 102, nome: 'Bruno' } },
  notas: { 101: [9.5, 8.0], 102: [6.0, 7.5] },
};

function esperar(milissegundos) {
  return new Promise((resolver) => setTimeout(resolver, milissegundos));
}

function buscarAluno(id) {
  return new Promise((resolver, rejeitar) => {
    setTimeout(() => {
      const aluno = bancoDeDadosSimulado.alunos[id];

      if (!aluno) {
        rejeitar(new Error(`Aluno ${id} não encontrado`));
        return;
      }

      resolver(aluno);
    }, 120);
  });
}

async function buscarNotas(id) {
  await esperar(80);
  return bancoDeDadosSimulado.notas[id] ?? [];
}

async function montarPerfilCompleto(id) {
  const [aluno, notas] = await Promise.all([buscarAluno(id), buscarNotas(id)]);
  const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

  return { ...aluno, media: Number(media.toFixed(2)) };
}

async function buscarComTratamentoDeErro(id) {
  try {
    return await buscarAluno(id);
  } catch (erro) {
    return { erro: erro.message };
  }
}

async function principal() {
  console.log('Iniciando consultas assíncronas...');

  buscarAluno(101).then((aluno) => console.log('Encadeamento com then:', aluno.nome));

  const perfil = await montarPerfilCompleto(101);
  console.log('Perfil montado com Promise.all:', perfil);

  const resultadoComFalha = await buscarComTratamentoDeErro(999);
  console.log('Erro tratado com try/catch:', resultadoComFalha);

  const resultados = await Promise.allSettled([buscarAluno(102), buscarAluno(500)]);
  for (const resultado of resultados) {
    console.log(`Status: ${resultado.status}`, resultado.value?.nome ?? resultado.reason?.message);
  }

  const inicio = Date.now();
  await esperar(150);
  console.log(`Execução pausada por aproximadamente ${Date.now() - inicio}ms`);
  console.log('Consultas finalizadas.');
}

principal().catch((erro) => console.error('Falha inesperada:', erro.message));
