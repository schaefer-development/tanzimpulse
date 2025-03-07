<script>
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	const quotes = [
		{
			text: '„So viel Vielfalt, Austausch, Kreative Impulse, inspirierende Momente…. Schön, dass ich seit so einer langen Zeit ein Teil davon sein kann. Vielen Dank.“',
			author: 'Nicole S.-Sch.'
		},
		{
			text: '"Das war eine wunderbar inspirierende und motivierende Auftaktveranstaltung zur Grundausbildung Tanzpädagogik! Ich freue mich schon jetzt sehr auf das nächste Modul!"',
			author: 'Brigitte B.'
		},
		{
			text: '„Tanzimpulse ist wie nach Hause kommen...“',
			author: 'Ulli H.'
		},
		{
			text: '„Lasst Euch feiern : für wunderbare erlebnisreiche und Bildungsfördernde künstlerische und inspirierende Jahre.“',
			author: 'Mara D. + Lisa J.'
		},
		{
			text: '„Wir erinnern uns gerne an unsere gemeinsame Zeit zurück und wünschen Euch, dass ihr weiterhin mit Freude durchs Leben tanzt und Menschen bewegend miteinander verbindet-so wie ihr es mit uns gemacht habt.“',
			author: 'Mara D. + Lisa J.'
		},
		{
			text: '„Die Ausbildung wird von sehr erfahrenen, authentischen und warmherzigen Dozentinnen geleitet, die jenseits ihres professionellen Unterrichts für jede Teilnehmerin ein offenes Ohr und gleichzeitig die gesamte Gruppe im Blick haben. Ich kann Tanzimpulse uneingeschränkt weiterempfehlen.“',
			author: 'Ulrike R. | Kursteilnehmerin'
		},
		{
			text: '„Die Ausbildungsjahre bei den Tanzimpulsen haben mich persönlich geprägt und meine Arbeit an der Schule als Lehrerin positiv beeinflusst und bereichert. Besonders die Improvisation ermöglicht es den Schülerinnen und Schülern kreativ, ideenreich und rücksichtsvoll gemeinsam oder alleine das Erarbeitete darzustellen.“',
			author: 'Beate | Kursteilnehmerin'
		},
		{
			text: '„Ich denke gerade daran, mit wie viel Freude die Kinder immer mit mir in den Turnraum gegangen sind und auch schüchterne Kinder ganz anders wahrzunehmen waren.“',
			author: 'Frauke | Tanzpädagogin/Schwerpunkt Kindertanz + Kita-Leitung'
		},
		{
			text: '„Ein riesengroßes Dankeschön für eure geleistete Arbeit im Vorfeld und euren Einsatz an dem Wochenende, für eure Liebe zur Tanzvermittlung und euren wertschätzenden Umgang mit uns Teilnehmerinnen.“',
			author: 'Heike W. | Kursteilnehmerin'
		},
		{
			text: '„Du kannst dir gar nicht vorstellen, wie diese Tanzausbildung mein Leben bereichert hat! Ich habe ja sehr unsicher angefangen, weil ich mit Musik und Tanz vorher nicht viel zu tun hatte. An jedem Tanzwochenende kam dann ein Puzzlestein dazu und ich konnte mein "Wachsen" spüren.“',
			author: 'Corinna R. | Kursteilnehmerin'
		},
		{
			text: '„Als ich 2002 mit der Ausbildung bei euch (Tanzimpulse-Grundstufe) begann, hätte ich im Leben nicht gedacht, welche Türen ich mir damit öffne. Rückblickend kann ich sagen, dass ich so ziemlich alle Bereiche, in der eine Tanzpädagogin tätig sein kann, erprobt habe und möchte keine davon missen.“',
			author: 'Astrid | Kursteilnehmerin'
		}
	];

	let index = 0;
	let maxHeight = 0;

	const next = () => {
		index = (index + 1) % quotes.length;
	};

	const previous = () => {
		index = (index - 1 + quotes.length) % quotes.length;
	};

	const updateMaxHeight = () => {
		if (typeof window !== 'undefined') {
			const quoteContainers = document.querySelectorAll('.quote-hidden');
			maxHeight = Math.max(...Array.from(quoteContainers).map((el) => el.offsetHeight));
		}
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			updateMaxHeight();
			window.addEventListener('resize', updateMaxHeight);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', updateMaxHeight);
		}
	});
</script>

<div class="relative flex w-full items-center justify-center" style="min-height: {maxHeight}px">
	{#each [quotes[index]] as quote (quote.text)}
		<div
			class="absolute flex w-3/4 flex-col items-center justify-center py-12 text-center"
			transition:fade
		>
			<cite class="text-ti_blue_mat mx-auto py-6 text-2xl font-light not-italic lg:text-3xl"
				>{quote.text}
			</cite>
			<p class="mx-auto text-sm font-bold tracking-widest text-gray-500 uppercase">
				{quote.author}
			</p>
		</div>
	{/each}

	<!-- Unsichtbarer Bereich für Höhenberechnung -->
	{#if typeof window !== 'undefined'}
		<div class="pointer-events-none absolute opacity-0">
			{#each [quotes[index]] as quote (quote.text)}
				<div class="quote-hidden flex w-3/4 flex-col items-center justify-center py-12 text-center">
					<cite class="text-ti_blue_mat mx-auto py-6 text-2xl font-light not-italic lg:text-3xl"
						>{quote.text}
					</cite>
					<p class="mx-auto text-sm font-bold tracking-widest text-gray-500 uppercase">
						{quote.author}
					</p>
				</div>
			{/each}
		</div>
	{/if}

	<button
		aria-label="Zurück"
		class="absolute left-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-400 text-white shadow-md hover:bg-neutral-600"
		on:click={previous}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</button>

	<button
		aria-label="Vor"
		class="absolute right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-400 text-white shadow-md hover:bg-neutral-600"
		on:click={next}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
			/>
		</svg>
	</button>
</div>
