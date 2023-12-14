<script lang="ts">
  import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
  import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
  import { base } from '$app/paths';
  export let seminar: Seminar;
  export let errors = [];
  export let anmeldung = null;

  let isPending = false;

  const pending = () => {
    isPending = true;
  };
  const error = async (res: Response, error: Error) => {
    isPending = false;
    errors.push(error);
    if (res) errors.push(await res.text());
  };
  const result = async (res: Response) => {
    isPending = false;
    const {
      data: { teilnehmer },
      errors: graphQLErrors
    } = await res.json();
    if (graphQLErrors) errors.push(...graphQLErrors);
    anmeldung = teilnehmer;
  };
  const action = `${base}/${seminar.format}/${seminar.url}/anmeldung.json`;
</script>

<section>
  <!--   <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
-->
  <div class="container mx-auto mx-auto w-full max-w-3xl gap-10">
    <div class="__long_description">
      <SeminarCard {seminar}>
        <div slot="beschreibung">
          <p class="py-6">
            {@html seminar.beschreibung.html}
          </p>
          <p class="text-black py-2">
            <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Dozentin/ Dozent</span><br />{seminar.referenten.map((referent) => referent.name).join(', ')}
          </p>
          <p class="text-black py-2">
            <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Kursgebühr</span><br />{seminar.preis} Euro
          </p>

          {#if seminar.dokumente.length}
            <div class="py-2">
              <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Dokumente</span><br />
              <ul class="pt-2">
                {#each seminar.dokumente as dokument}
                  <li class="pb-4 flex flex-row items-center">
                    <a href={dokument.url} target="_blank" class="hyperlink"
                      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>{dokument.fileName}</a
                    >
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <p class="h-8 block" />
          <VeranstaltungsOrt showMap={true} veranstaltungsort={seminar.veranstaltungsort} />
          <div class="pt-10 pb-4">
            <h2 class="ti_headline_blue_bold">Anmeldung</h2>
            <div class="flex py-6">
              <div class="icon flex justify-center items-center text-ti_red_accent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 m-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div class="w-9/12">
                <p class="py-2"><span class="font-bold text-ti_red_accent">INFO:</span> Die Anmeldung erfolgt auf der Webseite unseres Kooperationspartners, der VHS Bergisch Gladbach.</p>
              </div>
            </div>
            <a href={seminar.linktovhs} target="_blank" aria-label="Link zur VHS" class="block text-center border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Jetzt diesen Kurs über die VHS buchen</a>
          </div>
        </div>
      </SeminarCard>
    </div>
  </div>
</section>
