<script>
  import resume from '$data/resume.json'
  import FromTo from '$lib/components/FromTo.svelte'
  import {
    ExternalLinkIcon,
    ArrowRightIcon,
    BoxIcon,
    BookIcon,
  } from 'svelte-feather-icons'
</script>

<svelte:head>
  <title>CV - Emmanuel VODOR</title>
</svelte:head>

<main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h1 class="text-4xl font-bold mb-10">CV</h1>

  <section class="mb-10">
    <h2 class="text-2xl font-bold mb-2">
      <BoxIcon class="inline w-6 h-6 align-middle mr-2" />
      <span class="align-middle">Compétences</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente les compétences que j'ai acquises au cours de
      mes expériences professionnelles et personnelles.
    </p>
    <ul class="flex flex-wrap gap-3 mt-6">
      {#each resume.skills as skill}
        <li>
          <div
            class="px-3 py-2 inline-flex items-center font-medium text-blue-900 bg-blue-100 rounded dark:bg-blue-700 dark:text-blue-100 shadow text-lg border border-blue-200 dark:border-blue-600"
            title={skill.keywords.join(', ')}
          >
            {skill.name}
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold mb-6">
      <BookIcon class="inline w-6 h-6 align-middle mr-2" />
      <span class="align-middle">Projets</span>
    </h2>
    <p>
      En suivant le lien ci-dessous, vous pouvez consulter la liste des projets
      professionnels auquel j'ai participé. Vous y trouverez des informations
      concernant les technologies utilisées, les rôles que j'y ai joué, ainsi
      que le lien vers le site web.
    </p>
    <p class="mt-4">
      <a
        href="/projects"
        class="text-blue-500 hover:underline hover:underline-offset-2 dark:text-blue-300"
      >
        <span>Voir la liste des projets</span>
        <ArrowRightIcon class="inline w-4 h-4 align-middle" />
      </a>
    </p>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold mb-2">
      <BoxIcon class="inline w-6 h-6 align-middle mr-2" />
      <span class="align-middle">Expériences</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente mes différentes expériences professionnelles.
    </p>
    <ol class="flex flex-col gap-6 mt-6">
      {#each resume.work as job}
        <li>
          <div
            class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 shadow-lg"
          >
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {job.name}
            </h2>
            {#if job.position}
              <div class="mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >{job.position}</span
                >
              </div>
            {/if}
            {#if job.summary}
              <p class="my-4">{job.summary}</p>
            {/if}
            {#if job.highlights}
              <ul class="list-disc text-xs my-4 space-y-1 pl-4">
                {#each job.highlights as highlight}
                  <li class="text-gray-700 dark:text-gray-400">{highlight}</li>
                {/each}
              </ul>
            {/if}
            <p>
              <FromTo startDate={job.startDate} endDate={job.endDate} />
            </p>
            {#if job.url}
              <p>
                <a
                  href={job.url}
                  class="text-blue-500 hover:underline hover:underline-offset-2 text-xs dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{job.url}</span>
                  <ExternalLinkIcon class="inline w-3 h-3 align-text-bottom" />
                </a>
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section>
    <h2 class="text-2xl font-bold mb-2">
      <BoxIcon class="inline w-6 h-6 align-middle mr-2" />
      <span class="align-middle">Education</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente mes différentes formations.
    </p>
    <ol class="flex flex-col gap-6 my-6">
      {#each resume.education as school}
        <li>
          <div
            class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 shadow-lg"
          >
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {school.institution}
            </h2>
            {#if school.studyType}
              <p class="my-4">{school.studyType}</p>
            {/if}
            <p>
              <FromTo startDate={school.startDate} endDate={school.endDate} />
            </p>
            {#if school.url}
              <p>
                <a
                  href={school.url}
                  class="text-blue-500 hover:underline hover:underline-offset-2 text-xs dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{school.url}</span>
                  <ExternalLinkIcon class="inline w-3 h-3 align-text-bottom" />
                </a>
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>
</main>
