<script context="module" lang="ts">
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  export const prerender = true;
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

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_01.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_02.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_03.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_04.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_05.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_06.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_07.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_08.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_09.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_10.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_11.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_12.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_13.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_14.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_15.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_16.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_17.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_18.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_19.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_20.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center shadow-ti">
          <img class="object-cover w-full" src="/images/fotogalery/fotogalerie_21.jpg" alt="Tanzimpulse" />
        </div>
        <!-- -->


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
