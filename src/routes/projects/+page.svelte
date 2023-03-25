<script>
  import resume from '$data/resume.json'
  import FromTo from '$lib/components/FromTo.svelte'
  import { ExternalLinkIcon } from 'svelte-feather-icons'
</script>

<h2 class="text-3xl font-bold mb-6">Projects</h2>
<ol class="project-list gap-6">
  {#each resume.projects as project}
    <li>
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 shadow-lg"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {project.name}
        </h2>
        {#if project.entity}
          <p class="text-xs uppercase my-1 text-gray-700 dark:text-gray-400">
            {project.entity}
          </p>
        {/if}
        {#if project.roles}
          <ul>
            {#each project.roles as role}
              <li class="inline">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {role}
                </span>
              </li>
            {/each}
          </ul>
        {/if}
        {#if project.description}
          <p class="font-normal my-4">
            {project.description}
          </p>
        {/if}
        {#if project.highlights}
          <ul class="list-disc text-xs my-4 space-y-1 pl-4">
            {#each project.highlights as highlight}
              <li class="text-gray-700 dark:text-gray-400">{highlight}</li>
            {/each}
          </ul>
        {/if}
        <FromTo startDate={project.startDate} endDate={project.endDate} />
        {#if project.url}
          <p>
            <a
              href={project.url}
              class="text-blue-500 hover:underline hover:underline-offset-2 text-xs dark:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{project.url}</span>
              <ExternalLinkIcon class="inline w-3 h-3 align-text-bottom" />
            </a>
          </p>
        {/if}
      </div>
    </li>
  {/each}
</ol>

<style>
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
</style>
