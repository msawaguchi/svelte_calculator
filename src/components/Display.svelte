<script lang="ts">
    export let valor: string

    $: fontSize = valor.length > 30 ? 'small' : `s-${valor.length}`
</script>

<div class={`tela ${fontSize}`}>
    <span>{valor}</span>
</div>

<style>
    .tela {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 5px;
        background-color: #5c1f54;
        color: white;
        overflow: hidden;
        font-size: 1.7rem;
        margin: 2px 1px;
        text-shadow: 0 0 7px #fff;
    }

    .s-15 {
        font-size: 1.6rem;
    }

    .s-16 {
        font-size: 1.5rem;
    }

    .s-17 {
        font-size: 1.4rem;
    }

    .small {
        font-size: 1rem;
    }
</style>