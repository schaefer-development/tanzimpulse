<script context="module" lang="ts">
	import { base } from '$app/paths';
</script>

<div role="alert">
	<div class="bg-ti_green_mat shadow-ti flex w-full flex-col p-4 text-black sm:p-6 md:p-8 lg:p-10">
		<h2 class="mb-4 text-center text-3xl font-bold tracking-wide text-white uppercase">Gesendet</h2>
		<p class="pb-2 text-white">
			Sie erhalten in den nächsten Minuten eine Bestätigung per E-Mail. Wenn Sie keine Nachricht
			erhalten haben, schauen Sie bitte auch einmal in Ihrem Spamordner nach.
		</p>
		<p class="py-2 text-white">
			Falls Sie wider Erwarten keine Bestätigung erhalten, <a
				class="hover:text-black; cursor-pointer text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 ease-in-out hover:text-black"
				href="{base}/kontakt">kontaktieren Sie uns</a
			> bitte direkt.
		</p>
	</div>
</div>
