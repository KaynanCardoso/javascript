class Pessoa {
  #documento;

  constructor(nome, documento) {
    this.nome = nome;
    this.#documento = documento;
  }

  get documentoMascarado() {
    return `***.${this.#documento.slice(3, 6)}.***-**`;
  }

  apresentar() {
    return `${this.nome} (${this.documentoMascarado})`;
  }
}

class Aluno extends Pessoa {
  static totalDeMatriculas = 0;
  static #proximaMatricula = 1000;

  #notas = [];

  constructor(nome, documento, curso) {
    super(nome, documento);
    this.curso = curso;
    this.matricula = Aluno.#gerarMatricula();
    Aluno.totalDeMatriculas += 1;
  }

  static #gerarMatricula() {
    Aluno.#proximaMatricula += 1;
    return Aluno.#proximaMatricula;
  }

  static aPartirDeRegistro({ nome, documento, curso }) {
    return new Aluno(nome, documento, curso);
  }

  lancarNota(nota) {
    if (nota < 0 || nota > 10) {
      throw new RangeError('Nota deve estar entre 0 e 10');
    }

    this.#notas = [...this.#notas, nota];
    return this;
  }

  get media() {
    if (this.#notas.length === 0) {
      return 0;
    }

    const soma = this.#notas.reduce((total, nota) => total + nota, 0);
    return Number((soma / this.#notas.length).toFixed(2));
  }

  get situacao() {
    return this.media >= 7 ? 'aprovado' : 'reprovado';
  }

  apresentar() {
    return `${super.apresentar()} — ${this.curso}, matrícula ${this.matricula}`;
  }

  toString() {
    return `${this.nome}: média ${this.media} (${this.situacao})`;
  }
}

class Monitor extends Aluno {
  constructor(nome, documento, curso, disciplinaMonitorada) {
    super(nome, documento, curso);
    this.disciplinaMonitorada = disciplinaMonitorada;
  }

  apresentar() {
    return `${super.apresentar()} | monitor de ${this.disciplinaMonitorada}`;
  }
}

const ana = new Aluno('Ana Beatriz', '123456789', 'JavaScript');
ana.lancarNota(9.5).lancarNota(8);

const bruno = Aluno.aPartirDeRegistro({ nome: 'Bruno Lima', documento: '987654321', curso: 'Node.js' });
bruno.lancarNota(6);

const carla = new Monitor('Carla Souza', '456789123', 'TypeScript', 'Algoritmos');
carla.lancarNota(10).lancarNota(9);

console.log(ana.apresentar());
console.log(String(ana));
console.log(bruno.apresentar(), '->', bruno.situacao);
console.log(carla.apresentar());
console.log('Herança em cadeia:', carla instanceof Monitor, carla instanceof Aluno, carla instanceof Pessoa);
console.log('Total de matrículas geradas:', Aluno.totalDeMatriculas);

try {
  ana.lancarNota(11);
} catch (erro) {
  console.log('Validação encapsulada:', erro.message);
}

console.log('Campos privados não aparecem na serialização:', JSON.stringify(bruno));
