<script context="module" lang="ts">
	import { base } from '$app/paths';
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
	<title>Team</title>
</svelte:head>

<section>
	<div class="container flex flex-col">
		<div class="grid grid-cols-1 gap-10">
			<DefaultCard>
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/bierduempel.jpg"
							alt="Bettina Bierdümpel | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Bettina Bierdümpel</h2>
							<p>
								Künstlerische Leitung der TANZIMPULSE. Tanzpädagogin und Diplom-Sozialarbeiterin,
								langjährige wiss. Mitarbeiterin an der Technischen Hochschule Köln, Fakultät für
								Angewandte Sozialwissenschaften. Gründungsmitglied der TANZIMPULSE und künstlerische
								Leitung des Instituts seit 1994.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/cacutalua_tujek.jpg"
							alt="Astrid Cacutalua-Tujek | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Astrid Cacutalua-Tujek</h2>
							<p>
								Diplom-Tanzpädagogin (TI), Erzieherin und Fachkraft für elementarpäd.
								Sprachförderung. Ihren Schwerpunkt: „Sprachförderung und Tanz“ sowie „Rhythmische
								Bewegungförderung für U3 Kinder“, unterrichtet sie in der Grundstufe mit Schwerpunkt
								Kindertanz.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/fontana.jpg"
							alt="Sonia Fontana | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Sonia Fontana</h2>
							<p>
								Diplom-Tanzpädagogin (TI), absolvierte ihr Musicalstudium an der Universität für
								Musik und darstellende Kunst in Wien und arbeitet auf und hinter der Bühne als
								Schauspielerin, Sprecherin, Choreografin. Unterrichtserfahrung in der Tanz- und
								Theaterpädagogik. Ihr Thema in der Grund- und Aufbaustufe ist Musical Jazz.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/goencue.jpg"
							alt="Suna Göncü | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Suna Göncü</h2>
							<p>
								Choreografin und Tanzpädagogin für Modernen Tanz, Tanzimprovisation und
								Choreografie. Ihre Ausbildung erhielt sie im Elementaren Tanz an der Sporthochschule
								in Köln und an der Folkwang Hochschule in Essen.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/grossberg.jpg"
							alt="Bettina Grossberg | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Bettina Grossberg</h2>
							<p>
								Musikwissenschaftlerin M.A., Lehrerin für Kreativen und Heilpädagogischen Tanz,
								Leitung der Museumspädagogik beim Deutschen Tanzarchiv Köln/SK Stiftung Kultur;
								Prüferin beim Kolloquium der Diplomstufe bei TANZIMPULSE.
							</p>
						</div>
					</div>
					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/moschner.jpg"
							alt="Constanze Moschner | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Constanze Moschner</h2>
							<p>
								Musikpädagogin, Tanzpädagogin (TI), tätig an der Musikschule der Stadt Leverkusen im
								Elementarbereich musikalische und tänzerische Früherziehung sowie Klavier. Die enge
								Verbindung von Tanz und Musik ist ein Schwerpunkt ihrer Arbeit im kreativen Umgang
								mit Bewegung. Ihr musikpädagogisches Studium absolvierte sie an der Universität Köln
								sowie an der Folkwang-Universität der Künste in Essen. Sie ist freischaffend an
								verschiedenen Musik- und Tanzprojekten beteiligt.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/peters.jpg"
							alt="Susanne Peters | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Susanne Peters</h2>
							<p>
								Physiotherapeutin mit eigener Praxis und Dozentin für Bewegung und Tanz, bringt
								physiotherapeutische + tänzerische Erfahrungen zusammen, die sie in der Grundstufe
								mit Schwerpunkt Kindertanz bei der Vermittlung von Physiologie und Anatomie
								einbringt.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/stefan_schick.jpg"
							alt="Nicole Stefan-Schick | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Nicole Stefan-Schick</h2>
							<p>
								Tanzpädagogin, Choreografin, Diplom Sportlehrerin studierte Elementaren Tanz bei
								Graziella Padilla, Bewegungstheater bei Anne und Wolfgang Tiedt und zeitgenössischen
								Tanz am Centre National de Dance in Angers, Frankreich. Seit 1993 unterrichtet sie
								Tanz.
							</p>
						</div>
					</div>
					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/wolff.jpg"
							alt="Uta Wolff | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Uta Wolff</h2>
							<p>
								Diplom-Tanzpädagogin (TI), Physiotherapeutin im Bereich der Frühförderung, SI-,
								Bobath- und Bobathlehrtherapeutin. Ihr Thema ist bewegte Anatomie in Grund- und
								Aufbaustufe.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/woehler.jpg"
							alt="Sabrina Wöhler | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Sabrina Wöhler</h2>
							<p>
								Diplom-Tanzpädagogin (TI), Choreografin und Kommunikationswirtin. Durch die
								Zusatzausbildung zur Diplom-Tanzpädagogin entwickelte sich die Verbindung von
								Tanzkunst + Kommunikation. Seitdem leitet sie Tanz- und Choreografieprojekte mit
								Kindern, Jugendlichen und Erwachsenen. Das Thema Tanzprojekte unterrichtet sie in
								der Grundstufe mit Schwerpunkt Kindertanz.
							</p>
							<a
								class="hyperlink"
								rel="”noreferrer”"
								href="https://www.tanz-kommunikation.de"
								target="_blank">tanz-kommunikation.de</a
							>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src="{base}/images/employees/wrobel.jpg"
							alt="Heike Wrobel | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Heike Wrobel</h2>
							<p>
								Diplom-Tanzpädagogin (TI), Entspannungspädagogin AT und Erzieherin. Ihr
								tanzpädagogischer Schwerpunkt liegt in der Vermittlung von Kindertanz, in Projekten
								und Fortbildungen und in der ErzieherInnen-Ausbildung. Ihr Thema ist die kindgemäße
								Entspannung in der Grundstufe mit Schwerpunkt Kindertanz.
							</p>
						</div>
					</div>
				</div>
			</DefaultCard>

			<DefaultCard>
				<h2 class="text-ti_blue_mat mb-8 text-xl tracking-wide uppercase lg:text-2xl">
					Gastreferent/Innen
				</h2>
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Jindra Ackemann</h4>
						<p>Diplom Tanzpädagogin (TI), Erzieherin, Hipp Hop Trainerin von Jugendgruppen</p>
					</div>
					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Nina Buttler</h4>
						<p>
							Systemische Beraterin und psychosozialer Coach (ECA), Tanzpädagogin und Fascial
							Fitness® Trainerin. Bietet seit 2014 Systemisches Coaching für Menschen in
							Veränderungsprozessen, sozialen Einrichtungen, Führungs- und Fachkräften an.
							Unterrichtet seit 1999 im Fitnessbereich und seit 2016 fasziale Körperarbeit/ Faszien
							Fitness für mehr Beweglichkeit und Wohlbefinden.
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Ronja Frizen</h4>
						<p>
							M.A. Tanz + B.A. Sportmanagement und Kommunikationan an der DSHS Köln, vielfältige
							Projekt- und Bühnenerfahrung sowie Unterrichtstätigkeit
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Catharina Gadelha</h4>
						<p>
							ist Choreografin, Regisseurin und Tanz- und Theaterpädagogin. Zudem ist sie als
							Tanzvermittlerin im Kinder- und Jugendbereich international tätig. Anfang der 90er
							(1990—1994) absolvierte Gadelha eine Ausbildung in »Elementarer Tanzbei Graziella
							Padilla und studierte Bewegungstheater an der Deutschen Sporthochschule in Köln. Seit
							1992 ist sie freischaffende Choreografin. 1994 realisierte sie ein Regie- und
							Inszenierungsprojekt bei Johann Kresnik in Wien.
						</p>
					</div>
					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Birgit Götz</h4>
						<p>
							Sie arbeitet als Choreografin, Performerin und Tänzerin für Bühne und Raum.
							Zeitgenössischer Tanz wird kombiniert mit anderen Kunstformen, als Schwerpunkt ihres
							künstlerischen Wirkens. Als Dozentin ist sie an theaterpädagogischen Zentren in Essen,
							Hamm und an der FH Dortmund. Als Tanzvermittlerin für ist sie spartenübergreifende
							Projekte an unterschiedlichen Bildungseinrichtungen für „Kultur und Schule“ sowie
							„Jekits“ tätig. Planung und Gestaltung des Bereichs „Junge Szene“ ist ihr Thema am
							„Theater im Depot“ in Dortmund. Vielfach ausgezeichnet. Zuletzt erhielt sie 2025 den
							Jugendkulturpreis mit der LAG NRW für das Projekt „Urbanize“.
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Julia Meister</h4>
						<p>
							Diplomtanzpädagogin (TI), unterrichtet seit 15 Jahren Kindertanz in Projekten in
							Kitas, Grundschulen und Erziehungsvereinen. Wöchentliche Angebote in kreativem
							Kindertanz und Hip Hop finden in Tanzschulen sowie an einer OGS statt.
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Mônica Santos</h4>
						<p>
							Mônica Santos ist Tänzerin, Tanzpädagogin und Choreografin Tanz-Ausbildung in
							Brasilien (Conservatório Musical Santa Cecília, Academia de Dança Eleonora Oliosi).
							Pädagogische Ausbildung in Brasilien/Deutschland, Zusatzqualifikation als
							Choreographin (Academia de Dança Marian Guimarães, Deutscher Bundersverband Tanz e.
							V.). Regelmäßige choreographische Arbeit mit Jugendlichen bei verschiedenen nationalen
							und internationalen Tanzwettbewerben (Modern Dance, Lyrical).
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Verena Tarnai</h4>
						<p>
							Dipl.-Tanzpädagogin (TI) und Erzieherin. Seit 2012 Selbständig als Tanzpädagogin.
							Meine Schwerpunkte sind der Kreative Kindertanz und Hip Hop- Funky Jazz für Kinder im
							Kindergarten- und Grundschulalter. Ich leite eigene Kindertanzkurse, Tanz-AGs und
							Tanzprojekte. Bei meinen Tanzstunden liegt mir besonders am Herzen, die natürliche
							Bewegungsfreude und Kreativität der Kinder zu fördern und ihr Selbstvertrauen zu
							stärken.
						</p>
					</div>
				</div>
			</DefaultCard>
		</div>
	</div>
</section>
