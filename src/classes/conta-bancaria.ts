export class ContaBancaria {
    public numeroDaConta: string
    public titular: string
    private saldo: number = 0
    private saldoCaixinha: number = 0

    constructor(numeroDaConta: string, titular: string) {
        this.numeroDaConta = numeroDaConta
        this.titular = titular
    }

    public depositar(target: "conta-bancaria" | "caixinha", valor: number) {
        if (target === "conta-bancaria") {
            if (valor <= 0) {
                return console.log('Valor não permitido.')
            }

            this.saldo += valor
            return;
        }

        if (target === 'caixinha') {
            if (valor > this.saldo || valor < 0) {
                return console.log('Valor não permitido.')
            }

            this.saldoCaixinha += this.saldo - valor
            this.saldo -= valor
            return;
        }

        return console.log("Target inexistente.")
    }

    public sacar(target: "conta-bancaria" | "caixinha", valor: number) {
        if (target === "conta-bancaria") {
            if (valor <= 0) {
                return console.log('Valor não permitido.')
            }

            if (valor > this.saldo) {
                return console.log('Saldo insuficiente.')
            }

            this.saldo -= valor
            return console.log(`Saque no valor de R$${valor},realizado com sucesso !`);
        }

        if (target === 'caixinha') {
            if (valor < 0) {
                return console.log('Valor não permitido.')
            }

            if (valor > this.saldo) {
                return console.log('Saldo insuficiente.')
            }

            this.saldoCaixinha -= valor
            this.saldo += valor
            return console.log(`Saque no valor de R$${valor},realizado com sucesso !`);
        }

        return console.log("Target inexistente.")
    }

    public verificarSaldo(target: "conta-bancaria" | "caixinha") {
        if (target === 'conta-bancaria') {
            return console.log(`Saldo atual: ${this.saldo}`)
        }

        if (target === 'caixinha') {
            return console.log(`Saldo atual: ${this.saldoCaixinha}`)
        }

        return console.log('Target inexistente.')
    }
}