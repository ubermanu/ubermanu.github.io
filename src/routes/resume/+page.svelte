<script>
  import resume from '$data/resume.json'
  import FromTo from '$lib/components/FromTo.svelte'
</script>

<h1 class="text-4xl font-bold mb-4">CV</h1>

<h2 class="text-2xl font-bold mb-2">Experience</h2>
<ol class="flex flex-col space-y-2 mb-2">
  {#each resume.work as job}
    <li>
      <h3 class="font-bold">{job.name}</h3>
      <p>{job.summary}</p>
      <FromTo startDate={job.startDate} endDate={job.endDate} />
    </li>
  {/each}
</ol>

<h2 class="text-2xl font-bold mb-2">Projects</h2>
<p>
  Here are some of the projects I've worked on in the past. I've tried to
  include a mix of projects I've worked on in my spare time and projects I've
  worked on at work.
</p>
<p>
  <a href="projects" class="text-blue-500">See all projects</a>
</p>

<h2 class="text-2xl font-bold mb-2">Education</h2>
<ol class="flex flex-col space-y-2 mb-2">
  {#each resume.education as education}
    <li>
      <h3 class="font-bold">{education.institution}</h3>
      <FromTo startDate={education.startDate} endDate={education.endDate} />
    </li>
  {/each}
</ol>
