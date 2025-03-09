<script lang="ts">
	export let items: { title: string; content: string }[] = [];

	let accordions: HTMLDetailsElement[] = [];

	function toggleAccordion(event: Event, index: number) {
		const details = accordions[index];
		const content = details.querySelector('.content-wrapper') as HTMLElement;

		if (!details.open) {
			content.style.height = '0px';
			details.open = true;
			requestAnimationFrame(() => {
				content.style.height = content.scrollHeight + 'px';
			});
		} else {
			content.style.height = content.scrollHeight + 'px'; // Setze die aktuelle Höhe
			requestAnimationFrame(() => {
				content.style.height = '0px';
			});

			// Warte, bis die Transition beendet ist, bevor `open` entfernt wird
			setTimeout(() => {
				details.open = false;
			}, 300);
		}

		event.preventDefault(); // Verhindert das standardmäßige Öffnen von `<details>`
	}
</script>

<div class="space-y-2">
	{#each items as item, index (item.title)}
		<details bind:this={accordions[index]} class="group overflow-hidden">
			<summary
				class="flex cursor-pointer items-center justify-between border-b border-b-gray-200 py-2 transition-all"
				on:click={(e) => toggleAccordion(e, index)}
			>
				<span class="text-ti_blue_mat block cursor-pointer text-2xl leading-normal font-light"
					>{item.title}</span
				>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="aspect-square w-6 transition-transform duration-300 group-open:rotate-90"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</summary>
			<div
				class="content-wrapper overflow-hidden transition-all duration-300 ease-in-out"
				style="height: 0px;"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<div class="pt-4 pb-6">{@html item.content}</div>
			</div>
		</details>
	{/each}
</div>
