<script>
	import { images } from './imageData.js';
</script>

<!-- Thumbnails -->
<div class="flex flex-wrap">
	{#each images as { id, imgurl, name }}
		<div class="flex w-4/12 items-center justify-center">
			<img {id} src={imgurl} alt={name} on:click class="mx-2 my-2 w-11/12" />
		</div>
	{/each}
</div>
