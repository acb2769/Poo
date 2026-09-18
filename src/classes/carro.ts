/**
 * PILAR 1: ABSTRAÇÃO (Exemplo Clássico: Carro)
 * 
 * Abstração é o ato de isolar as características essenciais de uma entidade
 * para o contexto do sistema, ignorando detalhes desnecessários.
 * 
 * Para um sistema de frota/trânsito do Rio Pomba Valley, precisamos saber
 * o modelo, ano, placa e se está ligado. Não precisamos saber o número
 * de fios elétricos ou o tecido do estofamento.
 */

export class Carro {
    public modelo: string;
    public placa: string;
    public ano: number;
    private ligado: boolean = false;

    constructor(modelo: string, placa: string, ano: number) {
        this.modelo = modelo
        this.placa = placa
        this.ano = ano
    }

    public getStatusCarro() {
        return this.ligado
    }

    public getInfoCarro() {
        console.log(`
            -- Carro --
        Modelo: ${this.modelo} 
        Placa: ${this.placa} 
        Ano: ${this.ano} 
        Status atual: ${this.getStatusCarro() ? 'Ligado' : 'Desligado'}`)

        return;
    }

    public ligarCarro() {
        if (this.ligado) {
            return;
        }

        this.ligado = true;
    }

    public desligarCarro() {
        if (!this.ligado) {
            return;
        }

        this.ligado = false;
    }
}