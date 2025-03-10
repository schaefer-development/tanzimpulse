<script context="module" lang="ts">
	import { base } from '$app/paths';
</script>

<div role="alert">
	<div class="bg-ti_red_mat shadow-ti flex w-full flex-col p-4 text-black sm:p-6 md:p-8 lg:p-10">
		<h2 class="mb-4 text-center text-3xl font-bold tracking-wide text-white uppercase">Fehler</h2>
		<p class="text-center text-white">Da ist leider etwas schief gegangen.</p>

		<p class="py-2 text-white">
			Bitte <a
				class="hover:text-black; cursor-pointer text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 ease-in-out hover:text-black"
				href="{base}/kontakt">kontaktieren Sie uns</a
			> direkt.
		</p>
	</div>
</div>
