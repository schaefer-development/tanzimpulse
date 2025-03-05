<script context="module" lang="ts">
	import Carousel from '$lib/components/Slideshow/Carousel.svelte';

	const testimonials = [
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
</script>

<div class="relative">
	<Carousel perPage={1} autoplay={14000} easing="ease-in-out">
		<span class="control" slot="left-control">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="ti_slidehow_control relative h-10 w-10 rounded-full p-2 text-white transition duration-300 ease-in-out"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</span>

		{#each testimonials as { text, author }}
			<div
				class="relative mx-auto flex w-10/12 flex-col items-center p-6 text-center md:p-12 lg:p-20"
			>
				<cite class="text-ti_blue_mat mx-auto py-6 text-2xl font-light not-italic lg:text-3xl"
					>{text}</cite
				>
				<p class="mx-auto text-sm font-bold tracking-widest text-gray-500 uppercase">{author}</p>
			</div>
		{/each}

		<span class="control" slot="right-control">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="ti_slidehow_control relative h-10 w-10 rounded-full p-2 text-white transition duration-300 ease-in-out"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</span>
	</Carousel>
</div>

<style>
	.ti_slidehow_control {
		background: rgba(0, 0, 0, 0.25);
	}

	.ti_slidehow_control:hover {
		background: rgba(0, 0, 0, 0.5);
	}
</style>
