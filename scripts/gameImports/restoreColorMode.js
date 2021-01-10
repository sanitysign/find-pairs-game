import {switchColorMode} from './switchColorMode.js'

export function restoreColorMode() {

  if (!localStorage.findPairsGameColorMode) {
    localStorage.findPairsGameColorMode = `dark` 
  }

  if (localStorage.findPairsGameColorMode != `dark` && localStorage.findPairsGameColorMode != `light`) {
    localStorage.findPairsGameColorMode = `dark`
  }
  
  if (localStorage.findPairsGameColorMode == `light`) {
    switchColorMode(`light`)
    this.checked = true
  }

}