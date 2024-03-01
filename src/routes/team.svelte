<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  export const prerender = true;
</script>

<svelte:head>
  <title>Team</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="grid grid-cols-1 gap-10">
      <DefaultCard>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex flex-col py-4">
            <img class="w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 mx-auto rounded-full" src="{base}/images/employees/bierduempel.jpg" alt="Bettina Bierdümpel | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_bold text-center mb-4">Bettina Bierdümpel</h2>
              <p>Künstlerische Leitung der TANZIMPULSE. Tanzpädagogin und Diplom-Sozialarbeiterin, langjährige wiss. Mitarbeiterin an der Technischen Hochschule Köln, Fakultät für Angewandte Sozialwissenschaften. Gründungsmitglied der TANZIMPULSE und künstlerische Leitung des Instituts seit 1994.</p>
            </div>
          </div>
          <div class="flex flex-col py-4">
            <img class="w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 mx-auto rounded-full" src="{base}/images/employees/luckey.jpg" alt="Ute Luckey | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_bold text-center mb-4">Ute Luckey</h2>
              <p>Geschäftsführerin und Leitung des Büro der TANZIMPULSE. Mit Rat und Tat unterstützt sie als ehemalige Verwaltungsbeamtin die TANZIMPULSE seit der Gründung.</p>
            </div>
          </div>
        </div>
      </DefaultCard>

      <DefaultCard>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/fontana.jpg" alt="Sonia Fontana | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Sonia Fontana</h2>
              <p>Diplom-Tanzpädagogin (TI), absolvierte ihr Musicalstudium an der Universität für Musik und darstellende Kunst in Wien und arbeitet auf und hinter der Bühne als Schauspielerin, Sprecherin, Choreografin. Unterrichtserfahrung in der Tanz- und Theaterpädagogik. Ihr Thema in der Grundstufe ist Musical Jazz.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/stefan_schick.jpg" alt="Nicole Stefan-Schick | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Nicole Stefan-Schick</h2>
              <p>Tanzpädagogin, Choreografin, Diplom Sportlehrerin studierte Elementaren Tanz bei Graziella Padilla, Bewegungstheater bei Anne und Wolfgang Tiedt und zeitgenössischen Tanz am Centre National de Dance in Angers, Frankreich. Seit 1993 unterrichtet sie Tanz.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/goencue.jpg" alt="Suna Göncü | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Suna Göncü</h2>
              <p>Choreografin und Tanzpädagogin für Modernen Tanz, Tanzimprovisation und Choreografie. Ihre Ausbildung erhielt sie im Elementaren Tanz an der Sporthochschule in Köln und an der Folkwang Hochschule in Essen.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/grossberg.jpg" alt="Bettina Grossberg | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Bettina Grossberg</h2>
              <p>Musikwissenschaftlerin M.A., Lehrerin für Kreativen und Heilpädagogischen Tanz, Leitung der Museumspädagogik beim Deutschen Tanzarchiv Köln/SK Stiftung Kultur; Prüferin beim Kolloquium der Diplomstufe bei TANZIMPULSE.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/cacutalua_tujek.jpg" alt="Astrid Cacutalua-Tujek | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Astrid Cacutalua-Tujek</h2>
              <p>Diplom-Tanzpädagogin (TI), Erzieherin und Fachkraft für elementarpäd. Sprachförderung. Ihren Schwerpunkt: „Sprachförderung und Tanz“ sowie „Rhythmische Bewegungförderung für U3 Kinder“, unterrichtet sie in der Grundstufe mit Schwerpunkt Kindertanz.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/wrobel.jpg" alt="Heike Wrobel | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Heike Wrobel</h2>
              <p>Diplom-Tanzpädagogin (TI), Entspannungspädagogin AT und Erzieherin. Ihr tanzpädagogischer Schwerpunkt liegt in der Vermittlung von Kindertanz, in Projekten und Fortbildungen und in der ErzieherInnen-Ausbildung. Ihr Thema ist die kindgemäße Entspannung in der Grundstufe mit Schwerpunkt Kindertanz.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/woehler.jpg" alt="Sabrina Wöhler | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Sabrina Wöhler</h2>
              <p>Diplom-Tanzpädagogin (TI), Choreografin und Kommunikationswirtin. Durch die Zusatzausbildung zur Diplom-Tanzpädagogin entwickelte sich die Verbindung von Tanzkunst + Kommunikation. Seitdem leitet sie Tanz- und Choreografieprojekte mit Kindern, Jugendlichen und Erwachsenen. Das Thema Tanzprojekte unterrichtet sie in der Grundstufe mit Schwerpunkt Kindertanz.</p>
              <a class="hyperlink" rel="”noreferrer”" href="https://www.tanz-kommunikation.de" target="_blank">tanz-kommunikation.de</a>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/kampmann.jpg" alt="Renate Kampmann | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Renate Kampmann</h2>
              <p>staatl. gepr. Musikschullehrerin für elementare Musikerziehung, Diplom Tanzpädagogin (TI); Ihr Thema in der Grundstufe mit Schwerpunkt Kindertanz ist die Vermittlung Musikalischer Grundlagen.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/peters.jpg" alt="Susanne Peters | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Susanne Peters</h2>
              <p>Physiotherapeutin mit eigener Praxis und Dozentin für Bewegung und Tanz, bringt physiotherapeutische + tänzerische Erfahrungen zusammen, die sie in der Grundstufe mit Schwerpunkt Kindertanz bei der Vermittlung von Physiologie und Anatomie einbringt.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/wolff.jpg" alt="Uta Wolff | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Uta Wolff</h2>
              <p>Diplom-Tanzpädagogin (TI), Physiotherapeutin im Bereich der Frühförderung, SI-, Bobath- und Bobathlehrtherapeutin. Ihr Thema ist bewegte Anatomie in Grund- und Aufbaustufe.</p>
            </div>
          </div>
        </div>
      </DefaultCard>

      <DefaultCard>
        <h2 class="text-xl lg:text-2xl uppercase text-ti_blue_mat tracking-wide mb-8">Gastreferent/Innen</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Jindra Ackemann</h4>
            <p>Diplom Tanzpädagogin (TI), Erzieherin, Hipp Hop Trainerin von Jugendgruppen</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Nina Buttler</h4>
            <p>Erzieherin, Tanzpädagogin & Fascial Fitness® Trainerin, systemischer & psychosozialer Coach (ECA) unterrichtet seit 1999 im Fitnessbereich und bietet seit 2016 den Schwerpunkt fasziale Körperarbeit in Ihren Trainings, Kursen und Seminaren an.</p>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.sichtartundweise.de/" target="_blank">sichtartundweise.de</a>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Ronja Frizen</h4>
            <p>M.A. Tanz + B.A. Sportmanagement und Kommunikationan der DSHS Köln, vielfältige Projekt- und Bühnenerfahrung sowie Unterrichtstätigkeit</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Julia Meister</h4>
            <p>Diplomtanzpädagogin (TI), unterrichtet seit 15 Jahren Kindertanz in Projekten in Kitas, Grundschulen und Erziehungsvereinen. Wöchentliche Angebote in kreativem Kindertanz und Hip Hop finden in Tanz-, sowie an einer OGS statt.</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Constanz Moschner</h4>
            <p>Musikpädagogin, Tanzpädagogin (TI), tätig an der Musikschule der Stadt Leverkusen im Elementarbereich musikalische und tänzerische Früherziehung sowie Klavier. Die enge Verbindung von Tanz und Musik ist ein Schwerpunkt ihrer Arbeit im kreativen Umgang mit Bewegung. Ihr musikpädagogisches Studium absolvierte sie an der Universität Köln sowie an der Folkwang-Universität der Künste in Essen. Sie ist freischaffend an verschiedenen Musik- und Tanzprojekten beteiligt.</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Ursula Neumann</h4>
            <p>Dipl.-Soziologin, Unternehmensberaterin und Coach, Bratungs-Schwerpunkt: Freie Berufe, Kunst- und Kreativwirtschaft, soziale und alternative Unternehmen sowie Kitas.</p>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.ursulaneumann.de" target="_blank">ursulaneumann.de</a>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Mônica Santos</h4>
            <p>Tänzerin, Tanzpädagogin mit Ausbildungen in Brasilien und Deutschland; Schwerpunkte Klassischer Tanz, Weiterbildung in Modern- und Jazz Dance, Improvisation und Tanz für Kinder.</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Andreas Schick</h4>
            <p>Sport- und Mathematiklehrer, ist seit vielen Jahren leidenschaftlicher Lindy Hop Tänzer.</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Kathrin Steinert</h4>
            <p>Diplom Tanzpädagogin (TI), Gesellschaftstanzlehrerin (DTHO), Orientalischen Tanz (Catt), Langjährige Tanzerfahrung in Salsa, Bachata und Kizomba durch die Teilnahme an internationalen Workshops, Studierte Grundschullehrerin</p>
          </div>
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Stefanie Wilczek</h4>
            <p>Diplom Tanzpädagogin (TI), Pilates Trainerin (DTB) und Lehrerin für Deutsch, Englisch, Philosophie und Tanz an einer Kölner Schule. Tänzerischer Schwerpunkt ist die Projektarbeit mit Kindern und Jugendlichen im Bereich Tanztheater. Modern Dance, Hip Hop und kreativen Tanz wird dabei mit Sprache in Verbindung gesetzt.</p>
          </div>
          <!-- -->
        </div>
      </DefaultCard>
    </div>
  </div>
</section>
