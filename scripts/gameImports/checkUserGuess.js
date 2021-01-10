export function checkUserGuess(target) {
  this.counter++

  this.cardMap.get(target).showNumber(true)
  this.cardMap.get(target).interactive(false)

  this.temp.push(this.cardMap.get(target))

  for (const card of this.temp.slice(0, -1)) {

    if (this.cardMap.get(target).number === card.number) {

      this.temp.forEach(card => {
        card.showNumber(false)
        card.interactive(true)
        card.faded(false)
      })

      this.cardMap.get(target).showNumber(true)
      this.cardMap.get(target).interactive(false)
      this.cardMap.get(target).faded(true)

      card.showNumber(true)
      card.interactive(false)
      card.faded(true)

      this.temp.length = 0
      this.counter = 0
      this.opennedTotal++

      return
    }
  }

  if (this.counter === 3) {

    for (const card of this.temp) {
      card.showNumber(false)
      card.interactive(true)
      card.faded(false)
    }

    this.temp.length = 0
    this.counter = 0
  }
}


