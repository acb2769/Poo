import { Carro } from "./classes/carro.ts"
import { ContaBancaria } from "./classes/conta-bancaria.ts"

// const carro1 = new Carro('Siena', 'HFC0907', 2013)

// carro1.ligarCarro()
// carro1.getInfoCarro()

const conta1 = new ContaBancaria('1234', 'Daniel Ventura')
conta1.depositar('conta-bancaria', 100)
conta1.depositar('caixinha', 50)
conta1.sacar('caixinha', 40)
conta1.verificarSaldo('caixinha')
