<script>
  import { onMount } from 'svelte'
  import kaboom from 'kaboom'
  import iconNames from '$lib/icon-fiesta.js'

  /** @type {import('kaboom').KaboomCtx} */
  let k

  /** @type {HTMLCanvasElement} */
  let canvas

  /** @type {number} */
  let innerWidth

  /** @type {number} */
  let innerHeight

  onMount(() => {
    initKaboom()
  })

  function initKaboom() {
    k = kaboom({
      global: false,
      canvas,
      background: [0, 0, 0, 0],
    })

    const technos = []

    iconNames.forEach((icon) => {
      k.loadSprite(icon, `/assets/${icon}-128x128.png`)

      const tech = k.add([
        k.sprite(icon),
        k.pos(k.width() / 2, k.height() / 2),
        k.scale(k.rand(0.5, 1)),
        k.rotate(k.rand(0, 360)),
        k.anchor('center'),
        k.color(255, 255, 255),
        k.area(),
        k.body(),
      ])

      tech.onClick(() => {
        k.shake(10)
        tech.destroy()
      })

      technos.push(tech)
    })
  }

  function onResize() {
    if (canvas) {
      canvas.width = innerWidth
      canvas.height = innerHeight
    }
  }
</script>

<svelte:window on:resize={onResize} bind:innerWidth bind:innerHeight />

<div
  class="fixed left-0 top-0 h-full w-full opacity-5 dark:opacity-10"
  aria-hidden="true"
>
  <canvas class="h-full w-full" bind:this={canvas} />
</div>
