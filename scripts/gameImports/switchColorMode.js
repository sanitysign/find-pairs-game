export function switchColorMode(light = false) {
  let cssLight = document.head.querySelector("link[href*='lightMode.css']")

  if (light && cssLight) {
    localStorage.findPairsGameColorMode = `light`
    return
  }

  if (cssLight && !light) {
    cssLight.remove()
    localStorage.findPairsGameColorMode = `dark`
    return
  }

  cssLight = document.createElement('link')
  cssLight.rel = `stylesheet`
  cssLight.href = `./css/lightMode.css`
  localStorage.findPairsGameColorMode = `light`

  document.head.appendChild(cssLight)
}
