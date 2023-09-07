<script>
  import resume from '$data/resume.json'
  import FromTo from '$lib/components/FromTo.svelte'
  import { ExternalLinkIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <title>Projets - Emmanuel VODOR</title>
</svelte:head>

<main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
  <h2 class="mb-10 text-3xl font-bold">Projets</h2>
  <ol class="project-list gap-6">
    {#each resume.projects as project}
      <li>
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 shadow shadow-lg dark:border-gray-700 dark:bg-gray-900"
        >
          <h2
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {project.name}
          </h2>
          {#if project.entity}
            <p class="my-1 text-xs uppercase text-gray-700 dark:text-gray-400">
              {project.entity}
            </p>
          {/if}
          {#if project.roles && project.roles.length > 0}
            <ul>
              {#each project.roles as role}
                <li class="inline">
                  <span
                    class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {role}
                  </span>
                </li>
              {/each}
            </ul>
          {/if}
          {#if project.description}
            <p class="my-4 font-normal">
              {project.description}
            </p>
          {/if}
          {#if project.highlights}
            <ul class="my-4 list-disc space-y-1 pl-4 text-xs">
              {#each project.highlights as highlight}
                <li class="text-gray-700 dark:text-gray-400">{highlight}</li>
              {/each}
            </ul>
          {/if}
          <p>
            <FromTo startDate={project.startDate} endDate={project.endDate} />
          </p>
          {#if project.url}
            <p>
              <a
                href={project.url}
                class="text-xs text-blue-500 hover:underline hover:underline-offset-2 dark:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{project.url}</span>
                <ExternalLinkIcon class="inline h-3 w-3 align-text-bottom" />
              </a>
            </p>
          {/if}
          {#if project.keywords && project.keywords.length > 0}
            <ul class="mt-1 flex flex-wrap">
              {#each project.keywords as keyword}
                <li class="inline">
                  <span
                    class="mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                    >{keyword}</span
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</main>

<style>
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
</style>
