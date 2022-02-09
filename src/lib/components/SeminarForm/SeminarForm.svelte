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
  <form {action} method="post" use:enhance={{ result, error, pending }}>
    <h2 class="ti_headline_blue_bold mb-4">Anmeldeformular</h2>

    <div class="flex flex-col space-y-6 mb-8">
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Vorname
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="vorname" placeholder="Max" required />
      </label>
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Nachname
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="nachname" placeholder="Mustermann" required />
      </label>

      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >E-Mail Adresse
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="email" name="email" placeholder="max@mustermann.de" required />
      </label>
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Telefonnummer
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="tel" name="telefon" placeholder="0123456789" required />
      </label>
      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Adresse
        <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="adresse" placeholder="Musterstrasse 42, 12345 Musterstadt" required />
      </label>

      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-wider text-ti_blue_mat"
        >Anmerkung (optional)
        <textarea class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="anmerkung" placeholder="Anmerkung zur Anmeldung" rows="4" />
      </label>

      <div class="___registration checkboxes flex flex-col space-y-6 mb-8">
        <label class="flex mt-4">
          <input class="mr-4 h-6 w-6 block bg-white border-2 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0" type="checkbox" name="datenverarbeitung" required />
          <p>Ich habe die <a class="hyperlink" href="{base}/content/AGB.pdf" target="_blank">AGBs</a>, die <a class="hyperlink" href="{base}/content/Widerrufsbelehrung.pdf" target="_blank">Widerrufsbelehrung</a> sowie die Maßnahmen zum <a class="hyperlink" sveltekit:prefetch href="{base}/datenschutz">Datenschutz</a> gelesen und akzeptiert</p>
        </label>
        <label class="flex items-center">
          <input class="mr-4 h-6 w-6 block bg-white border-2 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0" type="checkbox" name="newsletter" />
          Newsletter abonnieren
        </label>
      </div>
    </div>
    <Button buttonstyle={'blue'}>Kostenpflichtig Anmelden</Button>
  </form>
</div>
