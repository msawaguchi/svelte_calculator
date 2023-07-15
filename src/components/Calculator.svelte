<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";
    import Button from "./Button.svelte";
    import Display from "./Display.svelte";
    import Line from "./Line.svelte";

    let calc = new CalculatorModel()

    const typedNumber = (num: string) => calc = calc.numeroDigitado(num)
    const pontoDigitado = () => calc = calc.dotTyped()
    const operacaoDigitada = (op: string) => calc = calc.operacaoDigitada(op)
    const calcular = () => calc = calc.calcular()
    const limpar = () => calc = calc.limparTela()
</script>

<div class="calculadora">
    <Display valor={calc.valor} />
    <Line >
        <Button texto="AC" triple contrast onClick={limpar}/>
        <Button texto="/" operator onClick={operacaoDigitada} />
    </Line>
    <Line >
        <Button texto="7" onClick={typedNumber}/>
        <Button texto="8" onClick={typedNumber}/>
        <Button texto="9" onClick={typedNumber}/>
        <Button texto="*" operator onClick={operacaoDigitada}/>
    </Line>
    <Line >
        <Button texto="4" onClick={typedNumber}/>
        <Button texto="5" onClick={typedNumber}/>
        <Button texto="6" onClick={typedNumber}/>
        <Button texto="+" operator onClick={operacaoDigitada}/>
    </Line>
    <Line >
        <Button texto="3" onClick={typedNumber}/>
        <Button texto="2" onClick={typedNumber}/>
        <Button texto="1" onClick={typedNumber}/>
        <Button texto="-" operator onClick={operacaoDigitada}/>
    </Line>
    <Line >
        <Button texto="0" double onClick={typedNumber}/>
        <Button texto="," onClick={pontoDigitado}/>
        <Button texto="=" contrast onClick={calcular}/>
    </Line>
</div>

<style>
    .calculadora {
        display: flex;
        flex-direction: column;
        height: 520px;
        width: 450px;
        padding: 10px;
        background-color: var(--background-color);
        box-shadow: 0 0 50px 15px #7d4384;
        font-family: "Lucida Console", "Courier New", monospace;
    }
</style>