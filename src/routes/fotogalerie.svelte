<script context="module" lang="ts">
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  export const prerender = true;

  let fotos = [{ src: './images/fotogallery/foto_01.jpg' }, { src: './images/fotogallery/foto_02.jpg' }, { src: './images/fotogallery/foto_03.jpg' }, { src: './images/fotogallery/foto_04.jpg' }, { src: './images/fotogallery/foto_05.jpg' }, { src: './images/fotogallery/foto_06.jpg' }, { src: './images/fotogallery/foto_07.jpg' }, { src: './images/fotogallery/foto_08.jpg' }, { src: './images/fotogallery/foto_09.jpg' }, { src: './images/fotogallery/foto_10.jpg' }, { src: './images/fotogallery/foto_11.jpg' }, { src: './images/fotogallery/foto_12.jpg' }, { src: './images/fotogallery/foto_13.jpg' }, { src: './images/fotogallery/foto_14.jpg' }];
</script>

<svelte:head>
  <title>Fotogalerie</title>
</svelte:head>

<section>
  <div class="container">
    <div class="relative">
      <Carousel perPage="1" autoplay="7000" easing="ease-in-out">
        <span class="control" slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full ti_slidehow_control transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>

        {#each fotos as foto}
          <div class="slide-content relative flex items-center shadow-ti">
            <picture>
              <source srcset={foto.src.replace('.jpg', '.webp')} type="image/webp" class="object-cover w-full" />
              <img class="object-cover w-full" src={foto.src} alt="Tanzimpulse | Institut für Tanzpädagogik" />
            </picture>
          </div>
        {/each}

        <span class="control" slot="right-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full ti_slidehow_control transition duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Carousel>
    </div>
  </div>
</section>

<style>
  .slide-content {
    width: 100%;
    max-width: 800px;
    margin: auto;
    min-height: 400px;
    max-height: 75vh;
  }

  .ti_slidehow_control {
    background: rgba(0, 0, 0, 0.25);
  }
  .ti_slidehow_control:hover {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
