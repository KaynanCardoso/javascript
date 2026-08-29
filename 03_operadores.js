const horasEstudadas = 47;
const horasPrevistas = 60;
const notaTeorica = 8;
const notaPratica = 9.5;

const mediaPonderada = (notaTeorica * 0.4 + notaPratica * 0.6).toFixed(2);
const percentualConcluido = Math.round((horasEstudadas / horasPrevistas) * 100);
const horasRestantes = horasPrevistas - horasEstudadas;
const crescimentoExponencial = 2 ** 10;
const restoDaDivisao = horasEstudadas % 8;

const atingiuMediaMinima = Number(mediaPonderada) >= 7;
const cumpriuCargaHoraria = horasEstudadas >= horasPrevistas * 0.75;
const aprovado = atingiuMediaMinima && cumpriuCargaHoraria;
const precisaDeRevisao = !aprovado || horasRestantes > 20;

const comparacaoEstrita = 8 === '8';
const comparacaoFrouxa = 8 == '8';

const perfilDoAluno = { nome: 'Rafael', preferencias: { tema: 'escuro' } };
const apelidoInformado = perfilDoAluno.apelido ?? 'sem apelido definido';
const idiomaConfigurado = perfilDoAluno.preferencias?.idioma ?? 'pt-BR';
const cidadeDeOrigem = perfilDoAluno.endereco?.cidade;

let tentativasRestantes = 3;
tentativasRestantes -= 1;
tentativasRestantes **= 2;

let apelidoPersistido = null;
apelidoPersistido ??= 'aluno-anonimo';

const situacao = aprovado ? 'aprovado' : 'em recuperação';

console.log(`Média ponderada: ${mediaPonderada}`);
console.log(`Progresso: ${percentualConcluido}% | Horas restantes: ${horasRestantes}`);
console.log(`Resto da divisão por 8: ${restoDaDivisao} | 2 elevado a 10: ${crescimentoExponencial}`);
console.log('Atingiu média mínima e carga horária?', aprovado);
console.log('Precisa de revisão?', precisaDeRevisao);
console.log('Comparação estrita:', comparacaoEstrita, '| Comparação frouxa:', comparacaoFrouxa);
console.log('Apelido:', apelidoInformado, '| Idioma:', idiomaConfigurado);
console.log('Encadeamento opcional em caminho inexistente:', cidadeDeOrigem);
console.log('Tentativas após atribuições compostas:', tentativasRestantes);
console.log('Atribuição com coalescência nula:', apelidoPersistido);
console.log(`Situação final: ${situacao}`);
