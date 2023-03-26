<script>
  import { onMount } from 'svelte'
  import kaboom from 'kaboom'
  import iconNames from '$lib/icon-fiesta.js'

  let k, canvas
  let innerWidth, innerHeight

  onMount(() => {
    initKaboom()
  })

  function initKaboom() {
    k = kaboom({
      global: false,
      fullscreen: true,
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
        k.opacity(0.2),
      ])

      tech.onClick(() => {
        k.shake()
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

<div class="w-full h-full fixed top-0 left-0" aria-hidden="true">
  <canvas class="w-full h-full" bind:this={canvas} />
</div>
