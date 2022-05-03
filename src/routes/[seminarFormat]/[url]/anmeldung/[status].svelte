<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { loadSeminar } from '$lib/routes';
  let success: boolean;
  export const load: Load = (context) => {
    const { page } = context;
    success = page.params.status === '200';
    return loadSeminar(context);
  };
</script>

<script lang="ts">
  import SeminarAnmeldung from '$lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
  export let seminar: Seminar;
</script>

<svelte:head>
  <title>{seminar.titel}</title>
</svelte:head>

{#if success}
  <SeminarAnmeldung anmeldung={true} {seminar} />
{:else}
  <SeminarAnmeldung errors={[true]} {seminar} />
{/if}
