function calcularFatorial(numero) {
  if (numero < 0) {
    throw new RangeError('Fatorial não é definido para números negativos');
  }

  if (numero <= 1) {
    return 1;
  }

  return numero * calcularFatorial(numero - 1);
}

function criarFibonacciMemoizado() {
  const cache = new Map([[0, 0], [1, 1]]);

  return function fibonacci(posicao) {
    if (cache.has(posicao)) {
      return cache.get(posicao);
    }

    const valor = fibonacci(posicao - 1) + fibonacci(posicao - 2);
    cache.set(posicao, valor);
    return valor;
  };
}

function somarListaAninhada(valores) {
  return valores.reduce((total, valor) => {
    if (Array.isArray(valor)) {
      return total + somarListaAninhada(valor);
    }
    return total + valor;
  }, 0);
}

function achatarProfundidade(estrutura) {
  return estrutura.flatMap((item) => (Array.isArray(item) ? achatarProfundidade(item) : item));
}

function percorrerTrilha(modulo, nivel = 0) {
  const identacao = '  '.repeat(nivel);
  const linhas = [`${identacao}${modulo.titulo}`];

  for (const submodulo of modulo.submodulos ?? []) {
    linhas.push(...percorrerTrilha(submodulo, nivel + 1));
  }

  return linhas;
}

function buscarBinaria(listaOrdenada, alvo, inicio = 0, fim = listaOrdenada.length - 1) {
  if (inicio > fim) {
    return -1;
  }

  const meio = Math.floor((inicio + fim) / 2);

  if (listaOrdenada[meio] === alvo) {
    return meio;
  }

  return listaOrdenada[meio] < alvo
    ? buscarBinaria(listaOrdenada, alvo, meio + 1, fim)
    : buscarBinaria(listaOrdenada, alvo, inicio, meio - 1);
}

const fibonacci = criarFibonacciMemoizado();

const trilhaDeEstudos = {
  titulo: 'JavaScript',
  submodulos: [
    { titulo: 'Fundamentos', submodulos: [{ titulo: 'Variáveis' }, { titulo: 'Operadores' }] },
    { titulo: 'Avançado', submodulos: [{ titulo: 'Closures' }, { titulo: 'Assincronismo' }] },
  ],
};

console.log('Fatorial de 6:', calcularFatorial(6));
console.log('Fatorial de 12:', calcularFatorial(12));
console.log('Fibonacci na posição 10:', fibonacci(10));
console.log('Fibonacci na posição 60 com memoização:', fibonacci(60));
console.log('Soma de lista aninhada:', somarListaAninhada([1, [2, 3, [4, [5]]], 6]));
console.log('Estrutura achatada:', achatarProfundidade([1, [2, [3, [4, [5]]]]]));
console.log('Trilha percorrida em profundidade:');
console.log(percorrerTrilha(trilhaDeEstudos).join('\n'));
console.log('Índice de 23 na busca binária:', buscarBinaria([2, 5, 8, 12, 16, 23, 38, 56], 23));
console.log('Índice de 7 na busca binária:', buscarBinaria([2, 5, 8, 12, 16, 23, 38, 56], 7));
