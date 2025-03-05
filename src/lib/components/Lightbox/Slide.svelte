<script>
	export let image;
	export let alt;
	export let title;
</script>

<!-- Full-width images with number text -->
<div class="mySlides flex justify-center">
	<img src={image} {alt} {title} />
</div>

<style>
	.mySlides {
		max-height: 60vh;
		overflow: hidden;
	}
</style>
