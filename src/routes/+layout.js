export const prerender = true

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
  const resume = await fetch(
    'https://raw.githubusercontent.com/ubermanu/data/main/resume.json'
  ).then((r) => r.json())

  return {
    resume,
  }
}
