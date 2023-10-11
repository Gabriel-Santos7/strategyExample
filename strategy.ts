interface ICalcMedia {
    calcularMedia(): number;
    situacao(): string;
}

class Disciplina {
    private calculadora: ICalcMedia;
    
    public media: number;
    public nome: string;
    public p1: number;
    public p2: number;
    public situacao: string;

    constructor(nome: string, p1: number, p2: number, calculadora: ICalcMedia) {
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
        this.calculadora = calculadora;
        this.calcularMedia();
    }

    public calcularMedia() {
        this.media = this.calculadora.calcularMedia();
        this.situacao = this.calculadora.situacao();
    }
}

class Aritmetica implements ICalcMedia {
    private p1: number;
    private p2: number;

    constructor(p1: number, p2: number) {
        this.p1 = p1;
        this.p2 = p2;
    }

    calcularMedia(): number {
        return (this.p1 + this.p2) / 2;
    }

    situacao(): string {
        return this.calcularMedia() > 5 ? "Aprovado" : "Reprovado";
    }
}

class Geometrica implements ICalcMedia {
    private p1: number;
    private p2: number;

    constructor(p1: number, p2: number) {
        this.p1 = p1;
        this.p2 = p2;
    }

    calcularMedia(): number {
        return Math.sqrt(this.p1 * this.p2);
    }

    situacao(): string {
        return this.calcularMedia() > 7 ? "Aprovado" : "Reprovado";
    }
}

// Exemplo de uso:
const aritmeticaStrategy = new Aritmetica(6.0, 4.0);
const disciplinaAritmetica = new Disciplina("Disciplina A", 6.0, 4.0, aritmeticaStrategy);

console.log(`Média Aritmética: ${disciplinaAritmetica.media}`);
console.log(`Situação: ${disciplinaAritmetica.situacao}`);
