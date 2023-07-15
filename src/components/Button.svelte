<script lang="ts">
    export let texto: string
    export let triple: boolean = false
    export let double: boolean = false
    export let operator: boolean = false
    export let contrast: boolean = false
    export let onClick: (valor:string) => void = () => {}
</script>

<button
    on:click={() => onClick(texto)}
    class="button" 
    class:triple 
    class:double
    class:operator
    class:contrast
>
    {texto}
</button>

<style>
    .button {
        cursor: pointer;
        flex-basis: 25%;
        margin: 0;
        border: 1px solid var(--background-color);
        background-color: #5e2357;
        color: white;
        font-weight: bold;
    }

    .button:hover {
        background-color: #5e2357;
        color: #fff;
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px rgb(234, 176, 225),
            0 0 82px rgb(234, 176, 225),
            0 0 92px rgb(234, 176, 225),
            0 0 102px rgb(234, 176, 225),
            0 0 151px rgb(234, 176, 225);
    }

    .triple {
        flex-basis: 75%;
    }

    .double {
        flex-basis: 50%;
    }

    .operator {
        background-color: #a95187;
    }

    .contrast {
        background-color: #9a3d76;
    }
</style>