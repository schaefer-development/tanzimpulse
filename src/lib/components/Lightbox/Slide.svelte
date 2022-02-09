<script>
  export let slideNo;
  export let totalSlides;
  export let image;
  export let altTag;
  export let attr;
</script>

<!-- Full-width images with number text -->
<div class="mySlides flex justify-center">
  <img src={image} alt={altTag} title={attr} />
</div>

<style>
  .mySlides {
    max-height: 60vh;
    overflow: hidden;
  }
</style>
