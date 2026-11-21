<script lang="ts">
	import { asset } from '$app/paths';
	import DefaultCard from '#lib/components/DefaultCard/DefaultCard.svelte';
</script>

<section>
	<div class="container flex flex-col">
		<div class="grid grid-cols-1 gap-10">
			<DefaultCard>
				<h1 class="ti_headline_blue_bold my-8 text-center">Unser Team bei Tanzimpulse</h1>

				<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/bierduempel.jpg')}
							alt="Bettina Bierdümpel | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Bettina Bierdümpel</h2>
							<p>
								Künstlerische Leitung der TANZIMPULSE. Tanzpädagogin und Diplom-Sozialarbeiterin,
								langjährige wiss. Mitarbeiterin an der Technischen Hochschule Köln, Fakultät für
								Angewandte Sozialwissenschaften. Gründungsmitglied der TANZIMPULSE und Leitung des
								Instituts seit 1994.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/fontana.jpg')}
							alt="Sonia Fontana | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Sonia Fontana</h2>
							<p>
								Diplom-Tanzpädagogin (TI), absolvierte ihr Musicalstudium an der Universität für
								Musik und darstellende Kunst in Wien und arbeitet auf und hinter der Bühne als
								Schauspielerin, Sprecherin, Choreografin. Unterrichtserfahrung in der Tanz- und
								Theaterpädagogik. Ihr Thema in der Grund- und Aufbaustufe ist Musical Jazz.
								<br />
								Außerdem ist sie im Orga-Team der Tanzimpulse u.a. für die Öffentlichkeitsarbeit zuständig.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/goencue.jpg')}
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
							src={asset('images/employees/grossberg.jpg')}
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
							src={asset('images/employees/heipel.jpg')}
							alt="Angelika Heipel | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Angelika Heipel</h2>
							<p>
								Sozialpädagogin/ Sozialarbeiterin mit staatlicher Anerkennung. Tanzpädagogin (TI)
								für den Elementar-, Primar-, Sekundarbereich, in der Erwachsenenbildung und mit
								Schwerpunkt Kindertanz. Vielfältige Berufserfahrungen im Kultur- und Sozialbereich.
								Studentin im Master Kulturpädagogik und Kulturmanagement an der Hochschule
								Niederrhein. Für die Tanzimpulse ist sie für den Bereich der Öffentlichkeitsarbeit
								und Akquise zuständig.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/meyer.jpg')}
							alt="Anne Meyer | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Anne Meyer</h2>
							<p>
								Diplom-Tanzpädagogin (TI) und Diplom-Pädagogin, sie ist in der außerschulischen
								Bildung und Beratung tätig und führt Tanzprojekte für Kinder und Jugendliche durch.
								Sie unterrichtet die Kleinsten beim Eltern-Kind-Tanz, vermittelt Freude an Bewegung
								und Fantasie im kreativen Kindertanz und Kinderyoga. Bei Tanzimpulse unterrichtet
								sie mit Schwerpunkt Kindertanz.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/moschner.jpg')}
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
							src={asset('images/employees/stefan_schick.jpg')}
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
							src={asset('images/employees/von_redey.jpg')}
							alt="Anna von Rédey | Tanzimpulse"
						/>
						<div class="pt-4">
							<h2 class="ti_headline_blue_light mb-4 text-center">Anna von Rédey</h2>
							<p>
								Diplom-Tanzpädagogin und Sozialarbeiterin, tätig an der Schnittstelle beider
								Bereiche. Freiberuflich arbeitet sie mehrheitlich mit Kindern jeder Altersklasse,
								zunehmend aber auch mit Jugendlichen und Erwachsenen in eigener Projektgestaltung.
								Ihre tanzpädagogischen Konzepte entstehen an der Schnittstelle von Körper,
								Gesellschaft und Transformation. Tänzerisch arbeitet sie vor allem mit den Techniken
								der Improvisation und der Körperarbeit. Bei Tanzimpulse unterrichtet sie mit
								Schwerpunkt Kindertanz.
							</p>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/wolff.jpg')}
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
							src={asset('images/employees/woehler.jpg')}
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
								rel="noopener noreferrer"
								href="https://www.tanz-kommunikation.de"
								target="_blank">tanz-kommunikation.de</a
							>
						</div>
					</div>

					<div class="___single_employee flex flex-col py-4">
						<img
							class="mx-auto h-16 w-16 rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32"
							src={asset('images/employees/wrobel.jpg')}
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
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Lisa Grafen</h4>
						<p>
							Diplom-Tanzpädagogin (TI) und Modedesignerin. Seit ihrer Kindheit ist Lisa mit der
							israelischen Folklore verbunden. Besonders faszinieren sie die Vielfalt der Musik, die
							unterschiedlichen Rhythmen und die Möglichkeit, durch den Folkloretanz andere Kulturen
							zu entdecken. Ihre langjährige Tanzerfahrung ist geprägt von europäischen und
							internationalen Einflüssen. Eine besondere Liebe gilt dem argentinischen Tango, der
							auch ihre Begeisterung für die vielfältigen Folkloretänze Argentiniens geweckt hat.
							Die Freude an der Musik, der Bewegung und am kulturellen Austausch begleitet sie bis
							heute.
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Elke Fischer</h4>
						<p>
							Die Begeisterung für die traditionellen Tänze Südosteuropas entstand durch zahlreiche
							Reisen nach Griechenland und die Faszination für die dortige Tanzkultur. Seit 1991
							gehört der internationale Tanz zu ihrem Leben. Neben der langjährigen Teilnahme an
							Workshops für griechische Tänze bei Nikos Thanos und Leonidas Efthymiadis in Köln ist
							sie seit März 2016 als Übungsleiterin für internationale Tänze beim TV Höhenhaus Köln
							tätig. Mit viel Freude am Tanzen und an der Gemeinschaft leitet sie die
							Donnerstagsgruppe in Holweide und gibt ihre Begeisterung für die Vielfalt
							internationaler Tänze weiter.
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
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Manuel Kramer</h4>
						<p>
							Seit 1997 ist er als Trainer, Lehrer und Ausbilder in den Bereichen Bewegung,
							Gesundheit und persönliche Entwicklung tätig. Seine Arbeit verbindet Tanz, Yoga,
							Pilates und ganzheitliche Mind-Body-Konzepte. Im Mittelpunkt stehen die Verbindung von
							Musik, Bewegung und Atem sowie individuelle Körpererfahrung und persönlicher Ausdruck.
							Er ist Referent und Ausbilder beim BTB, internationaler Yogalehrer und AntiGravity®
							Yoga Master Trainer, Aerial-Yoga-Ausbilder, Tanzpädagoge (TI), Pilates- und
							Reformer-Instructor sowie internationaler Presenter.
						</p>
					</div>

					<div class="___guest flex flex-col">
						<h4 class="text-ti_blue_mat mb-2 tracking-wide uppercase">Frederico Mendes Teixeira</h4>
						<p>
							Er stammt aus Belo Horizonte, Brasilien, und lebt seit 2017 in Essen. Er absolvierte
							den Master in Tanzkomposition sowie ein Studium der Tanzpädagogik mit Schwerpunkt
							Moderner Tanz an der Folkwang Universität, wo er von 2023 bis 2026 Kinetographie Laban
							unterrichtete. Aktuell vertieft er seine Studien in Cinétographie am Conservatoire
							National Supérieur de Musique et de Danse de Paris. Als Tänzer arbeitete er mit
							Künstler:innen und Compagnien wie Sasha Waltz & Guests, Marina Abramović und YiBu
							Dance. Zudem unterrichtet er Modern Dance und Workshops in NRW.
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
							Meine Schwerpunkte sind der Kreative Kindertanz und Hip Hop- Funky Jazz für Kinder im
							Kindergarten- und Grundschulalter. Ich leite eigene Kindertanzkurse, Tanz-AGs und
							Tanzprojekte. Bei meinen Tanzstunden liegt mir besonders am Herzen, die natürliche
							Bewegungsfreude und Kreativität der Kinder zu fördern und ihr Selbstvertrauen zu
							stärken.
						</p>
					</div>
				</div>
			</DefaultCard>
		</div>
	</div>
</section>
