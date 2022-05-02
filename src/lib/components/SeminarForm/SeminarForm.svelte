<script lang="ts">
  import { base } from '$app/paths';
  import { enhance } from '$lib/form.ts';
  import Button from '$lib/components/Button/Button.svelte';

  export let action;
  export let result;
  export let error = () => {};
  export let pending = () => {};
</script>

<div class="flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden bg-white shadow-ti transition duration-300 ease-in-out">
  <h1 class="ti_headline_blue_bold">Anmeldungen über die Webseite derzeit nicht möglich!</h1>
  Bitte kontaktieren Sie uns direkt per E-Mail:<a class="hyperlink" href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a>
</div>
