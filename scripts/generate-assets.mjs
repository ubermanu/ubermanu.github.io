import * as si from 'simple-icons'
import sharp from 'sharp'
import iconNames from '../src/lib/icon-fiesta.js'

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
