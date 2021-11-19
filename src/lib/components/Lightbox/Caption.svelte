<script>
  import { createEventDispatcher } from 'svelte';
  export let caption;

  const dispatch = createEventDispatcher();
</script>

<div class="flex justify-between pt-4">
  <!-- Previous Arrow -->
  <a href="#arrowL" class="prev text-white hover:text-ti_blue_accent" on:click={() => dispatch('prevClick')}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </a>

  <!-- Next Arrow -->
  <a href="#arrowR" class="next text-white hover:text-ti_blue_accent" on:click={() => dispatch('nextClick')}>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg></a
  >
</div>
