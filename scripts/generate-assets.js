import * as si from 'simple-icons'
import sharp from 'sharp'

const iconNames = [
  'php',
  'html5',
  'css3',
  'sass',
  'less',
  'tailwindcss',
  'jquery',
  'javascript',
  'magento',
  'svelte',
  'mysql',
  'mariadb',
  'sqlite',
  'nodedotjs',
  'typo3',
  'laravel',
  'react',
  'typescript',
  'archlinux',
  'nginx',
  'apache',
  'docker',
  'openstreetmap',
  'googlemaps',
  'googleanalytics',
  'googletagmanager',
  'phpmyadmin',
  'adminer',
  'composer',
  'editorconfig',
  'prettier',
  'icomoon',
  'npm',
  'pnpm',
  'yarn',
  'phpstorm',
  'github',
  'git',
  'digitalocean',
  'gitkraken',
]

// for each icon, generate a PNG file
// TODO: Generate a white and a black version
Promise.all(
  iconNames.map(async (iconName) => {
    const svg =
      si[`si${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`].svg
    if (!svg) {
      console.error(`Could not find ${iconName}`)
      return
    }

    await sharp(Buffer.from(svg))
      .png()
      .resize(128, 128)
      .modulate({ brightness: 0 })
      .toFile(`./static/assets/${iconName}-128x128.png`)
  })
).then(() => {
  console.log('Done!')
})
