<script>
  import TechStackBackground from '$lib/components/TechStackBackground.svelte'

  export let data
</script>

<svelte:head>
  <title>Emmanuel VODOR</title>
</svelte:head>

<main
  class="text-shadow pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center"
>
  <img
    class="h-32 w-32 rounded-full shadow-lg"
    src={data.resume.basics.image}
    alt=""
  />
  <br />
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
      class="link">GitHub</a
    >
    ou sur
    <a
      href="https://www.linkedin.com/in/emmanuel-vodor-167b0522/"
      target="_blank"
      rel="noopener noreferrer"
      class="link">LinkedIn</a
    >.
  </p>
  <br />
  <br />
  <a class="btn" href="/resume">Voir mon CV</a>
</main>

<TechStackBackground />

<style>
  a {
    cursor: pointer;
    pointer-events: auto;
  }
</style>
