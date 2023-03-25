<script>
  import TechStackBackground from '$lib/components/TechStackBackground.svelte'
</script>

<svelte:head>
  <title>Hi</title>
</svelte:head>

<main
  class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 pointer-events-none text-shadow"
>
  <p>
    Salut! Je suis <strong class="font-semibold">Emmanuel</strong>, developpeur
    fullstack senior.
  </p>
  <p>
    Les technologies que j'utilise sont principalement le PHP et le Javascript.
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
    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    href="/resume"
  >
    <span
      class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    >
      Voir mon CV
    </span>
  </a>
</main>

<TechStackBackground />

<style>
  a {
    pointer-events: auto;
    cursor: pointer;
  }
</style>
