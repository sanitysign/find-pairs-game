import {createCardMap} from './createCardMap.js'

export function addCards() {
  this.field.innerHTML = ``
  this.cards.length = 0

  for (let i = 1 ; i <= this.rowInput.value ; i++) {

    const row = document.createElement('div')
    row.classList.add(`guess__row`)

    for (let j = 1 ; j <= this.colInput.value ; j++) {

      const col = document.createElement('div')
      col.classList.add(`guess__card`, `non-interactive`)
      col.dataset.openned = true
      col.number = j
      this.cards.push(col)
      row.append(col)
    }

    this.field.append(row)
  }

  this.pairsTotal = this.cards.length / 2

  createCardMap.call(this, this.cards)

}


