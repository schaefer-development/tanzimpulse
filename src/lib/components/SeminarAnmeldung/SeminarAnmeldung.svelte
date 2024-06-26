<script lang="ts">
  import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
  import SeminarForm from '$lib/components/SeminarForm/SeminarForm.svelte';
  import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
  import Success from '$lib/components/Alerts/Success.svelte';
  import Error from '$lib/components/Alerts/Error.svelte';
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
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
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

          <VeranstaltungsOrt showMap={true} veranstaltungsort={seminar.veranstaltungsort} />
        </div>
      </SeminarCard>
    </div>

    <div class="__registration">
      {#if errors.length}
        <Error />
      {:else if isPending}
        <div class="flex justify-center items-center">
          <p class="text-ti_blue_accent mr-4 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="ti_animate-spin h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </p>
          <h2 class="ti_headline_blue_bold">Lädt ...</h2>
        </div>
      {:else if anmeldung}
        <Success />
      {:else}
        <SeminarForm {action} {result} {error} {pending} />
      {/if}
    </div>
  </div>
</section>
