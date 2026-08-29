function calcularMedia(notas) {
  if (notas.length === 0) {
    return 0;
  }

  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }

  return soma / notas.length;
}

function registrarPresenca(nomeDoAluno, aulasAssistidas = 0, totalDeAulas = 20) {
  const frequencia = (aulasAssistidas / totalDeAulas) * 100;
  return { nomeDoAluno, frequencia, aprovadoPorFrequencia: frequencia >= 75 };
}

function somarCreditos(...creditos) {
  let total = 0;
  for (const credito of creditos) {
    total += credito;
  }
  return total;
}

function montarRelatorio({ nome, notas, aulasAssistidas }) {
  const media = calcularMedia(notas);
  const presenca = registrarPresenca(nome, aulasAssistidas);

  return {
    nome,
    media: Number(media.toFixed(2)),
    frequencia: Number(presenca.frequencia.toFixed(1)),
    aprovado: media >= 7 && presenca.aprovadoPorFrequencia,
  };
}

const formatarRelatorio = function relatorioLegivel(relatorio) {
  const situacao = relatorio.aprovado ? 'APROVADO' : 'REPROVADO';
  return `${relatorio.nome} | média ${relatorio.media} | frequência ${relatorio.frequencia}% | ${situacao}`;
};

const alunos = [
  { nome: 'Ana', notas: [9.5, 8.0, 9.0], aulasAssistidas: 19 },
  { nome: 'Bruno', notas: [6.0, 7.5, 5.5], aulasAssistidas: 12 },
  { nome: 'Carla', notas: [10, 9.0, 9.5], aulasAssistidas: 20 },
];

let totalDeAprovados = 0;
for (const aluno of alunos) {
  const relatorio = montarRelatorio(aluno);
  if (relatorio.aprovado) {
    totalDeAprovados += 1;
  }
  console.log(formatarRelatorio(relatorio));
}

console.log('Total de aprovados:', totalDeAprovados);
console.log('Créditos somados com rest parameters:', somarCreditos(4, 4, 2, 6));
console.log('Presença com valores padrão:', registrarPresenca('Diego'));
