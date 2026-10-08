export class Pessoa {
    public id: string
    public nome: string
    protected email: string

    constructor(id: string, nome: string, email: string) {
        this.id = id
        this.nome = nome
        this.email = email
    }
}

export class Professor extends Pessoa {
    public valorHora: number
    public calcHora: number

    constructor(id: string, nome: string, email: string, valorHora: number, calcHora: number) {
        super(id, nome, email)
        this.valorHora = valorHora
        this.calcHora = calcHora
    }

    public calcularAulas(): number {
        return this.valorHora * this.calcHora
    }
}

export class Coordenador extends Professor {
    public gratgestao: number

    constructor(id: string, nome: string, email: string, valorHora: number, calcHora: number, gratgestao: number) {
        super(id, nome, email, valorHora, calcHora)
        this.gratgestao = gratgestao
    }

    public calcularRendimentoTotal(quantidadeAulas: number): number {
        const ganhoAulas = this.calcularAulas() * quantidadeAulas
        return ganhoAulas + this.gratgestao
    }
}

export class AlunoBolsista extends Pessoa {
    public horasPesquisa: number

    constructor(id: string, nome: string, email: string, horasPesquisa: number) {
        super(id, nome, email)
        this.horasPesquisa = horasPesquisa
    }
}
