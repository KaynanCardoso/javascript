function classificarDesempenho(nota) {
  if (typeof nota !== 'number' || Number.isNaN(nota)) {
    return 'nota inválida';
  }

  if (nota < 0 || nota > 10) {
    return 'nota fora do intervalo permitido';
  }

  if (nota >= 9) {
    return 'excelente';
  }

  if (nota >= 7) {
    return 'satisfatório';
  }

  if (nota >= 5) {
    return 'recuperação';
  }

  return 'reprovado';
}

function descreverModalidade(modalidade) {
  switch (modalidade) {
    case 'presencial':
      return 'Aulas em sala com presença obrigatória.';
    case 'hibrido':
    case 'semipresencial':
      return 'Aulas divididas entre encontros presenciais e online.';
    case 'online':
      return 'Aulas totalmente remotas e assíncronas.';
    default:
      return 'Modalidade não cadastrada.';
  }
}

function definirBolsa(rendaFamiliar, temDeficiencia) {
  if (temDeficiencia) {
    return 'bolsa integral';
  }

  return rendaFamiliar <= 2000 ? 'bolsa parcial de 50%' : 'sem bolsa';
}

console.log('Nota 9.6:', classificarDesempenho(9.6));
console.log('Nota 7.2:', classificarDesempenho(7.2));
console.log('Nota 5.4:', classificarDesempenho(5.4));
console.log('Nota 3.1:', classificarDesempenho(3.1));
console.log('Nota 12:', classificarDesempenho(12));
console.log(descreverModalidade('hibrido'));
console.log(descreverModalidade('online'));
console.log(descreverModalidade('intensivo'));
console.log('Bolsa calculada:', definirBolsa(1800, false));
console.log('Bolsa calculada:', definirBolsa(9000, true));
console.log('Entrada inválida:', classificarDesempenho('dez'));
