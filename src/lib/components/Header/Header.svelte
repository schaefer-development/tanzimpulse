<script lang="ts">
  import { base } from '$app/paths';

  let open = false;
  const toggleMenu = () => {
    open = !open;
  };
</script>

<header style="z-index:9999;" class="sticky top-0 z-50 bg-ti_blue_mat shadow-ti_hover">
  <nav class="container flex items-center justify-end flex-wrap px-6 py-4 mx-auto w-full">
    <div class="block self-align-end">
      <button on:click={toggleMenu} class="flex items-center px-2 py-2 focus:border-0 text-white tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent ">
        <span class="uppercase font-bold px-2 ">Menu</span>
        <svg class="fill-current h-6 w-6 text-ti_blue_accent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
  </nav>
</header>

<aside id="drawer" style="opacity:1; z-index:999999;" on:click={toggleMenu} class="{open ? 'translate-x-0' : 'translate-x-full'} transform bg-ti_blue_mat-dark top-0 left-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300">
  <div class="container flex flex-col flex-wrap px-6 py-4 mx-auto w-full menu_points">
    <div class="flex justify-end w-full block">
      <button class="flex items-center px-2 py-2 focus:border-0 text-white uppercase font-bold tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent ">
        <span class="uppercase font-bold px-2">Schliessen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6 text-ti_blue_accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="animated flex flex-col">
      <hr class="border-black my-4" />
      <a sveltekit:prefetch href="{base}/" class="text-white hover:text-ti_blue_accent py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Start</a>
      <hr class="border-black my-4" />
      <h3 class="text-xs text-white uppercase tracking-widest pb-2">Tanzpädagogik</h3>
      <a sveltekit:prefetch href="{base}/ausbildungen" class="text-white hover:text-ti_blue_accent py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Ausbildungen</a>
      <a sveltekit:prefetch href="{base}/workshops" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Workshops</a>
      <hr class="border-black my-4" />
      <h3 class="text-xs text-white uppercase tracking-widest pb-2">Eindrücke</h3>
      <a href="{base}/fotogalerie" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Fotos</a>
      <a href="{base}/videos" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Videos</a>
      <hr class="border-black my-4" />
      <h3 class="text-xs text-white uppercase tracking-widest pb-2">Tanzimpulse</h3>
      <a href="{base}/kontakt" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Kontakt</a>
      <a href="{base}/team" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Team</a>
      <a href="{base}/mitgliedschaften" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Mitgliedschaften</a>
      <a href="{base}/philosophie" class="text-white hover:text-ti_blue_accent  py-1 md:py-0 text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-ti_blue_accent md:py-0">Philosophie</a>
      <hr class="border-black my-4" />
      <div class="___social_media_icons pt-2 flex flex-wrap flex-row justify-start">
        <a rel="noreferrer" aria-label="Facebook" target="_blank" href="https://www.facebook.com/Tanzimpulse/" class="text-white mr-4 hover:text-ti_blue_accent ease-in-out transition-all duration-300">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a rel="noreferrer" aria-label="Instagram" target="_blank" href="https://www.instagram.com/tanzimpulse_koeln/" class="ml-4 text-white hover:text-ti_blue_accent ease-in-out transition-all duration-300">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</aside>
