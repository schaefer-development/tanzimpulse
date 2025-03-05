<script>
	export let buttonstyle = 'blue';
	export let href = null;

	const mapping = {
		/*    default: 'border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_mat-dark hover:text-ti_blue_accent-light focus:text-ti_blue_accent focus:bg-ti_blue_mat-dark focus:text-white',
		 */
		blue: 'border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white',
		cyan: 'border-white text-white hover:bg-ti_cyan_accent hover:text-ti_cyan_mat-dark',
		green: 'border-white text-white hover:bg-ti_green_accent hover:text-ti_green_mat-dark',
		_blue: 'border-white text-white hover:bg-ti_blue_accent hover:text-ti_blue_mat-dark',
		_cyan: 'border-white text-white hover:bg-ti_cyan_accent hover:text-ti_cyan_mat-dark',
		_green: 'border-white text-white hover:bg-ti_green_accent hover:text-ti_green_mat-dark',

		red: 'border-ti_red_accent-light text-ti_red_accent hover:bg-ti_red_mat-dark hover:text-ti_red_accent hover:text-ti_red_accent focus:bg-ti_red_mat-dark focus:text-white ',
		white:
			'text-white border-white hover:bg-ti_red_mat-dark hover:text-white focus:bg-ti_red_mat-dark focus:text-white ',
		gray: 'text-gray-400 border-gray-400 cursor-not-allowed hover:text-gray-400 focus:text-gray-400'
	};
</script>

{#if href}
	<a
		{href}
		sveltekit:prefetch
		aria-label="Mehr"
		class="{mapping[
			buttonstyle
		]} hover:shadow-ti block w-full rounded-full border-2 p-4 text-center text-sm font-extrabold tracking-widest uppercase shadow-sm transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
	>
		<slot />
	</a>
{:else}
	<button
		type="submit"
		aria-label="Mehr"
		class="{mapping[
			buttonstyle
		]} hover:shadow-ti w-full rounded-full border-2 p-4 text-sm font-extrabold tracking-widest uppercase shadow-sm transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
	>
		<slot />
	</button>
{/if}
