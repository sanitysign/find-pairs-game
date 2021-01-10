import {showAllCards} from './showAllCards.js'

export function setResetIndicator(startNew = true) {
  this.timer = 0

  clearInterval(this.intervalId)
  this.timeOver.style.opacity = 0
  this.indicator.style.width = 100 + `%`

  if (startNew === true) {
    this.intervalId = setInterval(() => {
      this.timer += this.INDICATOR_UPDATE

      this.indicator.style.width = 100 - (this.timer * 100 / this.TIME) + `%`

      if (this.timer >= this.TIME) {

        clearInterval(this.intervalId)
        this.timeOver.style.opacity = 1
        this.indicator.style.width = 100 + `%`
        showAllCards.call(this)
        this.start.textContent = `Again`
        this.start.focus()
      }
    }, this.INDICATOR_UPDATE)
  }
}
