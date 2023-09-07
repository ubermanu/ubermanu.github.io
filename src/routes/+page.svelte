<script>
  import TechStackBackground from '$lib/components/TechStackBackground.svelte'
</script>

<svelte:head>
  <title>Emmanuel VODOR</title>
</svelte:head>

<main
  class="text-shadow pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center"
>
  <p>
    Salut! Je suis <strong class="font-semibold">Emmanuel</strong>, développeur
    fullstack senior, en freelance.
  </p>
  <p>
    Les technologies que j'utilise sont principalement le <b>PHP</b> et le
    <b>JavaScript</b>.
  </p>
  <p>
    Sur ce site, vous trouverez des informations sur mes projets, mes
    compétences et mon CV.
  </p>
  <p>
    Vous pouvez me contacter sur <a
      href="https://github.com/ubermanu"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 hover:text-blue-700">GitHub</a
    >
    ou sur
    <a
      href="https://www.linkedin.com/in/emmanuel-vodor-167b0522/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 hover:text-blue-700">LinkedIn</a
    >.
  </p>
  <br />
  <a
    class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
    href="/resume"
  >
    <span
      class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
    >
      Voir mon CV
    </span>
  </a>
</main>

<TechStackBackground />

<style>
  a {
    cursor: pointer;
    pointer-events: auto;
  }
</style>
