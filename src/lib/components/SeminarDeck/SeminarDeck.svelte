<script lang="ts">
	import { resolve } from '$app/paths';
	import SeminarCard from '#lib/components/SeminarCard/SeminarCard.svelte';

	let { seminare }: { seminare: Seminar[] } = $props();
</script>

<section>
	<div class="container my-10">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each seminare as seminar (seminar.id)}
				<SeminarCard
					{seminar}
					link={resolve('/[seminarFormat]/[url]', {
						seminarFormat: seminar.format,
						url: seminar.url
					})}
				/>
			{/each}
		</div>
	</div>
</section>
