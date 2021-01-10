import {gameInnerHtml} from './gameImports/gameInnerHtml.js'
import {restoreColorMode} from './gameImports/restoreColorMode.js'
import {addCards} from './gameImports/addCards.js'
import {checkInput} from './gameImports/checkInput.js'
import {switchColorMode} from './gameImports/switchColorMode.js'
import {setResetIndicator} from './gameImports/setResetIndicator.js'
import {checkUserGuess} from './gameImports/checkUserGuess.js'

export class FindPairsGame {
  constructor(name, container, rowArg = 4, colArg = 4) {
    this.name = name
    this.TIME = 60000
    this.INPUT_DELAY = 500
    this.INDICATOR_UPDATE = 100

    this.container  = document.createElement('div')
    this.container.classList.add(`guess__container`)
    this.container.innerHTML = gameInnerHtml
    container.append(this.container)

    this.field  = this.container.querySelector('.guess__field')
    this.colInput  = this.container.querySelector('.guess__input-col')
    this.rowInput  = this.container.querySelector('.guess__input-row')
    this.start  = this.container.querySelector('.guess__start-btn')
    this.reset  = this.container.querySelector('.guess__reset-btn')
    this.timeOver  = this.container.querySelector('.guess__display')
    this.indicator  = this.container.querySelector('.guess__indicator')
    this.colorToggle = this.container.querySelector('.guess-switch__input')

    this.timeoutId = null
    this.intervalId = null
    this.cards = []

    this.rowInput.value = checkInput(rowArg)
    this.colInput.value = checkInput(colArg)

    restoreColorMode.call(this.colorToggle)

    addCards.call(this)
    this.start.focus()

    this.colInput.oninput = (e) => {

      clearTimeout(this.timeoutId)
      this.rowInput.disabled = true

      this.timeoutId = setTimeout(() => {
        this.colInput.value = checkInput(this.colInput.value)

        addCards.call(this)

        setResetIndicator.call(this, false)

        this.start.focus()
        this.rowInput.disabled = false


      }, this.INPUT_DELAY)
    }

    this.rowInput.oninput = (e) => {
      clearTimeout(this.timeoutId)
      this.colInput.disabled = true

      this.timeoutId = setTimeout(() => {
        this.rowInput.value = checkInput(this.rowInput.value)

        addCards.call(this)

        setResetIndicator.call(this, false)

        this.start.focus()
        this.colInput.disabled = false

      }, this.INPUT_DELAY)
    }

    this.colorToggle.oninput = () => {
      switchColorMode(this.colorToggle.checked)
    }

    this.start.onclick = () => {

      this.temp = []
      this.counter = 0
      this.opennedTotal = 0;

      addCards.call(this)

      this.start.blur()

      this.cards.forEach(card => {
        card.classList.remove(`non-interactive`, `faded`)
        delete card.dataset.openned
      })

      this.start.textContent = `Start`

      setResetIndicator.call(this, true)

      this.field.onclick = (e) => {
        if (!e.target.classList.contains(`guess__card`) || e.target.dataset.openned) return;

        checkUserGuess.call(this, e.target)

        if (this.opennedTotal === this.pairsTotal) {

          setResetIndicator.call(this, false)

          this.start.textContent = `Again`
          this.start.focus()

        }
      }
    }

    this.reset.onclick = () => {

      this.reset.blur()
      this.start.focus()
      this.start.textContent = `Start`
      this.rowInput.value = 4
      this.colInput.value = 4

      setResetIndicator.call(this, false)
      addCards.call(this)

    }
  }
}
