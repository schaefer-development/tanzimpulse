<script>
  import { images } from './imageData.js';
</script>

<!-- Thumbnails -->
<div class="flex flex-wrap">
  {#each images as { id, imgurl, name }}
    <div class="flex justify-center items-center w-4/12 ">
      <img {id} src={imgurl} alt={name} on:click class="w-11/12 mx-2 my-2" />
    </div>
  {/each}
</div>
