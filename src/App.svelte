<script lang="ts">
    import Calculator from "./components/Calculator.svelte";
</script>

<main>
	<Calculator />
</main>

<style>
	:global(body) {
		background: #ad5389;  
		background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  
		background: linear-gradient(to right, #3c1053, #ad5389);
	} 

	:root {
		--background-color: #75336e;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>