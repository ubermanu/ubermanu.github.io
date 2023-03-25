<script>
  import resume from '$data/resume.json'
  import FromTo from '$lib/components/FromTo.svelte'
  import { ExternalLinkIcon } from 'svelte-feather-icons'
</script>

<main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h1 class="text-4xl font-bold mb-4">CV</h1>

  <h2 class="text-2xl font-bold my-6">Experience</h2>
  <ol class="flex flex-col gap-6 my-6">
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

  <h2 class="text-2xl font-bold my-6">Projects</h2>
  <p>Here are some of the projects I've worked on in the past.</p>
  <p>
    <a
      href="/projects"
      class="text-blue-500 hover:underline hover:underline-offset-2 dark:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>See all projects</span>
    </a>
  </p>

  <h2 class="text-2xl font-bold mb-2">Education</h2>
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
</main>
