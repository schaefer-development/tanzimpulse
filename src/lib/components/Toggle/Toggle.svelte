<script lang="ts">
	export let kategorie;
</script>

<div class="flex w-full items-center">
	<label class="flex w-full cursor-pointer flex-row-reverse">
		<div class="relative flex-0">
			<input
				type="checkbox"
				name="kategorie"
				value={kategorie.id}
				bind:checked={kategorie.selected}
				class="sr-only"
			/>
			<div class="dot-background bg-ti_red_mat block h-8 w-14 rounded-full border-2 transition" />
			<div class="dot absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition" />
		</div>
		<div
			class="flex-1 text-2xl font-extralight tracking-wide text-white transition duration-300 ease-in-out"
		>
			{kategorie.name} ({kategorie.seminare.length})
		</div>
	</label>
</div>

<style>
	input:checked ~ .dot {
		transform: translateX(100%);
	}
	input:checked ~ .dot-background {
		background-color: #539827;
	}
</style>
