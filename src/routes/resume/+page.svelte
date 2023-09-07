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

<main class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
  <h1 class="mb-10 text-4xl font-bold">CV</h1>

  <section class="mb-10">
    <h2 class="mb-2 text-2xl font-bold">
      <BoxIcon class="mr-2 inline h-6 w-6 align-middle" />
      <span class="align-middle">Compétences</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente les compétences que j'ai acquises au cours de
      mes expériences professionnelles et personnelles.
    </p>
    <ul class="mt-6 flex flex-wrap gap-3">
      {#each resume.skills as skill}
        <li>
          <div
            class="inline-flex items-center rounded border border-blue-200 bg-blue-100 px-3 py-2 text-lg font-medium text-blue-900 shadow dark:border-blue-600 dark:bg-blue-700 dark:text-blue-100"
            title={skill.keywords.join(', ')}
          >
            {skill.name}
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <section class="mb-10">
    <h2 class="mb-6 text-2xl font-bold">
      <BookIcon class="mr-2 inline h-6 w-6 align-middle" />
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
        <ArrowRightIcon class="inline h-4 w-4 align-middle" />
      </a>
    </p>
  </section>

  <section class="mb-10">
    <h2 class="mb-2 text-2xl font-bold">
      <BoxIcon class="mr-2 inline h-6 w-6 align-middle" />
      <span class="align-middle">Expériences</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente mes différentes expériences professionnelles.
    </p>
    <ol class="mt-6 flex flex-col gap-6">
      {#each resume.work as job}
        <li>
          <div
            class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
          >
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {job.name}
            </h2>
            {#if job.position}
              <div class="mb-4">
                <span
                  class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >{job.position}</span
                >
              </div>
            {/if}
            {#if job.summary}
              <p class="my-4">{job.summary}</p>
            {/if}
            {#if job.highlights}
              <ul class="my-4 list-disc space-y-1 pl-4 text-xs">
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
                  class="text-xs text-blue-500 hover:underline hover:underline-offset-2 dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{job.url}</span>
                  <ExternalLinkIcon class="inline h-3 w-3 align-text-bottom" />
                </a>
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section>
    <h2 class="mb-2 text-2xl font-bold">
      <BoxIcon class="mr-2 inline h-6 w-6 align-middle" />
      <span class="align-middle">Education</span>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      La liste ci-dessous présente mes différentes formations.
    </p>
    <ol class="my-6 flex flex-col gap-6">
      {#each resume.education as school}
        <li>
          <div
            class="rounded-lg border border-gray-200 bg-white p-6 shadow shadow-lg dark:border-gray-700 dark:bg-gray-900"
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
                  class="text-xs text-blue-500 hover:underline hover:underline-offset-2 dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{school.url}</span>
                  <ExternalLinkIcon class="inline h-3 w-3 align-text-bottom" />
                </a>
              </p>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>
</main>
