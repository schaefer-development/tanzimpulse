<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { overbooked, dateFormat } from '$lib/helpers.ts';
  import { base } from '$app/paths';
  export let seminare = [];
  export let color = 'white';
</script>

{#each seminare as seminar (seminar.id)}
  <div class="flex flex-col ">
    <div class="pt-2 pb-2 pl-2 pr-4">
      <p class="text-md font-bold uppercase tracking-wide leading-6 break-word">{seminar.titel}</p>
      <p class="text-md font-extralight">{dateFormat.format(new Date(seminar.datum))} Uhr</p>

      {#if overbooked(seminar)}
        <span class="uppercase text-white text-sm font-bold tracking-wider pt-2">Anmeldung zur Warteliste</span>
      {:else}
        <span class="uppercase text-ti_green_accent-light font-bold text-sm tracking-wider pt-2">Noch Plätze frei</span>
      {/if}
    </div>

    <div class="flex mx-auto items-center p-2">
      <Button href={`${base}/${seminar.format}/${seminar.url}`} buttonstyle={color}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg></Button
      >
    </div>
  </div>
  <hr class="block border border-black w-full my-2 opacity-20" />
{/each}
