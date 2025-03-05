<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	/* import '@fontsource/poppins/200.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/700.css';
  import '@fontsource/poppins/800.css';*/
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="app flex min-h-screen flex-col justify-between">
	<Header />

	<main class="bg-warmGray-200 relative top-0 mb-auto h-auto">
		<div id="BUBBLES" class="absolute z-0 h-full w-full overflow-hidden opacity-30">
			<img src="{base}/images/bg.svg" alt="background" />
		</div>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
