<script lang="ts">
  import { base } from '$app/paths';
  import { enhance } from '$lib/form.ts';
  import Button from '$lib/components/Button/Button.svelte';
  import HCaptcha from 'svelte-hcaptcha';
  import { HCAPTCHA_SITEKEY } from '$lib/env';
  import { browser } from '$app/env';

  export let action: string;
  export let result: (...args: unknown[]) => unknown;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export let error = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export let pending = () => {};

  let captcha;
  const handleError = () => {
    captcha.reset();
  };
</script>

<div class="flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden bg-white shadow-ti transition duration-300 ease-in-out">
  <form {action} method="post" use:enhance={{ result, error, pending }}>
    <h2 class="ti_headline_blue_bold mb-4">Anmeldeformular</h2>

    <div class="flex flex-col space-y-6 mb-8">
      <div class="grid grid-cols-2 gap-4">
        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >Vorname
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="vorname" placeholder="Max" required />
        </label>

        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >Nachname
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="nachname" placeholder="Mustermann" required />
        </label>
      </div>

      <div class="grid grid-cols-2 gap-x-6">
        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >E-Mailadresse
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="email" name="email" placeholder="max@mustermann.de" required />
        </label>

        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >Telefonnummer
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="tel" name="telefon" placeholder="0123456789" required />
        </label>
      </div>

      <div class="grid grid-cols-2 gap-x-6">
        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black grow-1"
          >Strasse
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="strasse" placeholder="Musterstrasse" required />
        </label>

        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black grow-none"
          >Hausnummer
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="hausnummer" placeholder="123" required />
        </label>
      </div>

      <div class="grid grid-cols-2 gap-x-6">
        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >PLZ
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="plz" placeholder="54321" required />
        </label>

        <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
          >Ort
          <input class="block text-black bg-white border-2 p-4 border-coolGray-300 focus:border-2 focus:border-ti_red_accent outline-none focus:outline-none focus:bg-white focus:ring-0 placeholder-gray-400 mb-2 transition duration-300 ease-in-out" type="text" name="ort" placeholder="Musterstadt" required />
        </label>
      </div>

      <label class="flex flex-col-reverse uppercase text-xs font-bold tracking-widest text-black"
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
    <div class="pb-8 flex justify-center">
      <HCaptcha sitekey={HCAPTCHA_SITEKEY} hl="de" bind:this={captcha} on:error={handleError} />
      <noscript> Sie benötigen einen JavaScript-fähigen Browser für die Anmeldung zu einem Seminar. </noscript>
    </div>
    {#if browser}
      <Button buttonstyle={'blue'}>Kostenpflichtig Anmelden</Button>
    {/if}
  </form>
</div>
