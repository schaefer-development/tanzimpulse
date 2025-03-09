<script lang="ts">
	export let query: string | null;
	const onInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      query = e.target.value;
    }
	};
</script>

<div class="hover:shadow-ti focus:shadow-ti mt-4 flex rounded-full">
	<div class="relative w-full">
		<span class="absolute inset-y-0 left-0 flex items-center pl-2">
			<button
				aria-label="Nach Begriff suchen und sortieren"
				type="submit"
				class="focus:shadow-outline flex items-center px-4 py-4 focus:outline-none"
			>
				<svg
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					class="h-6 w-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
				>
			</button>
		</span>
		<input
			bind:value={query}
			on:input={onInput}
			class="border-ti_red_mat-dark bg-ti_red_mat w-full rounded-full border-2 py-4 pr-8 pl-14 text-xl text-white placeholder-white transition duration-300 ease-in-out hover:border-white focus:border-white focus:ring-0 focus:outline-none"
			type="text"
			placeholder="Nach Begriff suchen ..."
		/>
	</div>
</div>
