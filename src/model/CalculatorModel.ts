const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

export default class CalculatorModel {
    #valor: string
    #acumulador: number
    #limparTela: boolean
    #operacao: string

    constructor(
        valor: string = null, 
        acumulador: number = null, 
        operacao: string = null, 
        limparTela = false) {
            this.#valor = valor
            this.#acumulador = acumulador
            this.#operacao = operacao
            this.#limparTela = limparTela
    }

    get valor() {
        return this.#valor?.replace('.',',') || '0'
    }

    numeroDigitado(novoValor: string) {
        return new CalculatorModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }

    dotTyped() {
        return new CalculatorModel(
            this.#valor?.includes('.') ? this.#valor : this.valor + '.',
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA,
        )
    }

    limparTela() {
        return new CalculatorModel()
    }

    operacaoDigitada(proximaOperacao: string) {
        return this.calcular(proximaOperacao)
    }

    calcular(proximaOperacao: string = null) {
        const acumulador = !this.#operacao
        ? parseFloat(this.#valor)
        : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)

        const valor = !this.#operacao ? this.#valor : `${acumulador}`

        return new CalculatorModel(
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
        )
    }
}

