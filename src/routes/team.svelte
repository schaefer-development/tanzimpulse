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
              <p>staatl. gepr. Musikschullehrerin für elementare Musikerziehung, Diplom Tanzpädagogin (TI); Zusatzqualifikation Gehörbildung/Tonsatz, Fortbildungen beim Orff Institut, Dozententätigkeit bei Lehrgängen auf Kreisebene, Orchesterleitung (Dirigat).</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/peters.jpg" alt="Susanne Peters | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Susanne Peters</h2>
              <p>Physiotherapeutin mit eigener Praxis und Dozentin für Bewegung und Tanz, bringt physiotherapeutische + tänzerische Erfahrungen zusammen in ein eigenes Konzept.</p>
            </div>
          </div>

          <div class="___single_employee flex flex-col py-4">
            <img class="w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 mx-auto rounded-full" src="{base}/images/employees/wolff.jpg" alt="Uta Wolff | Tanzimpulse" />
            <div class="pt-4">
              <h2 class="ti_headline_blue_light text-center mb-4">Uta Wolff</h2>
              <p>Diplom-Tanzpädagogin (TI), Physiotherapeutin im Bereich der Frühförderung, SI-, Bobath- und Bobathlehrtherapeutin,</p>
            </div>
          </div>
        </div>
      </DefaultCard>

      <DefaultCard>
        <h2 class="text-xl lg:text-2xl uppercase text-ti_blue_mat tracking-wide mb-8">Gastreferent/Innen</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Elke Fischer</h4>
            <p>Tanzleiterin für Folkloretanz aus Europa und angrenzenden Ländern, sie leitet seit vielen Jahren eine wöchentliche Tanzgruppe im rechtsrheinischen Köln, besucht regelmäßig Fortbildungen beispielsweise bei Tineke + Maurits van Geel, Nikos Thanos, Leonidas Efthymiadis, Uli Knie u.a.</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Bettina Fleischer</h4>
            <p>Diplom Tanzpädagogin (TI) und Erzieherin; leitet verschiedene fortlaufende Tanzgruppen, Tanzprojekte und Multiplikatoren Fortbildungen mit dem Schwerpunkt Kindertanz.</p>
            <a class="hyperlink" rel="”noreferrer”" href="https://takt-gefuehl.jimdofree.com" target="_blank">takt-gefuehl.jimdofree.com</a>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Sonia Fontana</h4>
            <p>Diplom Tanzpädagogin (TI), Musicaldarstellerin (Studium in Wien), Choreografin, Schauspielerin</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Mayemouna Gaye</h4>
            <p>vermittelt traditionelle senegalesische Tänze aus dem Alltag westafrikanischer Frauen, meistens verbunden mit Liedern oder Geschichten.</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Anne Grafweg</h4>
            <p>Dipl. Tanzpädagogin, Ausbildung an der Hochschule der Künste (Arnheim), Schwerpunkte sind Moderner Tanz, Ballett, Jazzdance. Engagements als Tänzerin am Schauspielhaus Düsseldorf u.a., choreografische Arbeit in der Choreografischen Werkstatt Solingen. Unterrichtserfahrung mit Kindern, Jugendlichen und Erwachsenen.
            </p>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.anne-grafweg.de" target="_blank">anne-grafweg.de</a>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Jennifer Heise</h4>
            <p>Dipl. Sozialpädagogin, Dipl. Tanzpädagogin (TI), Theaterpädagogin, hauptberuflich in der Ev. Jugendarbeit tätig- Schwerpunkt Musicalprojektarbeit</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Wolfgang Hering</h4>
            <p>Diplom-Pädagoge und Musiker, seit 1994 freiberuflicher Kinderliedermacher und Buchautor</p>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.wolfganghering.de" target="_blank">wolfganghering.de</a>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Ursula Neumann</h4>
            <p>Dipl.-Soziologin, Unternehmensberaterin und Coach, seit rund 20 Jahren beratend tätig, Schwerpunkt: Freie Berufe, Kunst- und Kreativwirtschaft, soziale und alternative Unternehmen sowie Kitas. Außerdem Musik-Kabarettistin und Songtexterin</p>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.ursulaneumann.de" target="_blank">ursulaneumann.de</a>
            <a class="hyperlink" rel="”noreferrer”" href="https://www.klangundwort.de" target="_blank">klangundwort.de</a>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Mônica Santos</h4>
            <p>Tänzerin, Tanzpädagogin mit Ausbildungen in Brasilien (Conservatório Musical Santa Cecília, Academia de Dança Eleonora Oliosi) und Deutschland; Schwerpunkte Klassischer Tanz, Weiterbildung in Modern- und Jazz Dance, Improvisation und Tanz für Kinder. Tänzerin in der Companhia de Danca Eleonora Oliosi und der Oper Bonn. Teilnahme mit Jugendlichen an nationalen und internationalen Tanzwettbewerben.</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Lisa Stefer</h4>
            <p>DiplomTanzpädagogin (TI), leitet u.a. die Profilklasse Tanz am Genoveva-Gymnasium, Köln-Mülheim</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Sabine von Stuckrad</h4>
            <p>DiplomTanzpädagogin (TI), staatl. anerkannte Motopädin, Moving Cycle Practitioner + Theaterplastikerin</p>
          </div>
          
          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Adams Tchawodji</h4>
            <p>kommt aus Lomé, Togo. Seit 2003 professioneller Ausbildung bei der Gruppe "Dagbeneva" in Kpalimé, Togo. Seit 2015 vermittelt er "westafrikanischer traditioneller Tanz" in Deutschland in derTanzzentrale Leipzig und danach in Köln. Aktkuell heißt sein Projekt "TrommelTanz" für Kinder.</p>
          </div>

          <div class="___guest flex flex-col">
            <h4 class="uppercase text-ti_blue_mat tracking-wide mb-2">Anna von Redéy</h4>
            <p>Tanzpädagogin, Schwerpunkte sind Folkloretanz, Jazz, Hip Hop, Moderner Tanz;  dazu kommt nach einem Praktikum in Togo bei der Gruppe "Dagbeneva" der  westafrikansicher traditionelle Tanz. 2017 beginnt sie mit der tanzpädagogischen Ausbildung bei Tanzimpulse Köln, derzeit in der Diplomstufe. Das Kindertanzprojektes "TrommelTanz" führt sie mit Adams Tchawodji gemeinsam durch.</p>
          </div>
        </div>
      </DefaultCard>
    </div>
  </div>
</section>
