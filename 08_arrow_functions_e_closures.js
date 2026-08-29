const converterParaConceito = (nota) => (nota >= 7 ? 'A' : 'B');
const criarMensagem = (aluno, conceito) => `${aluno} recebeu conceito ${conceito}`;
const construirBoletim = (aluno, nota) => ({ aluno, nota, conceito: converterParaConceito(nota) });

function criarContadorDeAcessos(nomeDoModulo) {
  let acessos = 0;

  return {
    registrar: () => {
      acessos += 1;
      return `${nomeDoModulo}: ${acessos} acesso(s)`;
    },
    total: () => acessos,
  };
}

function criarAcumuladorDeNotas(pesoDaProva) {
  let somaPonderada = 0;
  let quantidadeDeNotas = 0;

  return (nota) => {
    somaPonderada += nota * pesoDaProva;
    quantidadeDeNotas += 1;
    return Number((somaPonderada / quantidadeDeNotas).toFixed(2));
  };
}

const cronometro = {
  disciplina: 'Estruturas de Dados',
  minutos: [30, 45, 25],
  resumir() {
    const descrever = (minuto) => `${this.disciplina} por ${minuto}min`;
    const detalhes = [];

    for (const minuto of this.minutos) {
      detalhes.push(descrever(minuto));
    }

    return detalhes;
  },
};

const criarValidadorDeNota = (limiteMinimo) => (nota) => nota >= limiteMinimo;
const validarNotaDeAprovacao = criarValidadorDeNota(7);
const validarNotaDeRecuperacao = criarValidadorDeNota(5);

const contadorDeAlgoritmos = criarContadorDeAcessos('Algoritmos');
contadorDeAlgoritmos.registrar();
contadorDeAlgoritmos.registrar();

const acumularNotasDaProva = criarAcumuladorDeNotas(1);

console.log('Boletim construído por arrow function:', construirBoletim('Ana', 8.5));
console.log(criarMensagem('Bruno', converterParaConceito(6.4)));
console.log(contadorDeAlgoritmos.registrar());
console.log('Estado preservado pela closure:', contadorDeAlgoritmos.total());
console.log('Média parcial após primeira nota:', acumularNotasDaProva(8));
console.log('Média parcial após segunda nota:', acumularNotasDaProva(6));
console.log('this léxico dentro do método:', cronometro.resumir());
console.log('Nota 6.5 aprovada?', validarNotaDeAprovacao(6.5), '| em recuperação?', validarNotaDeRecuperacao(6.5));
