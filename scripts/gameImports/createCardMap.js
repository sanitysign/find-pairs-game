export function createCardMap(cards) {
  const cardMap = new Map()

  let arr = createArr(cards.length / 2)
  let i = 0

  shuffleFisherYates(arr)

  for (const card of cards) {

    const cardModified = {
      div: card,
      number: arr[i++],

      showNumber(check = true) {
        if (check !== true) {
          this.div.textContent = ``
        } else {
          this.div.textContent = this.number
          // return this
        }
      },

      faded(check = true) {
        if (check === true) {
          this.div.classList.add(`faded`)
          // return this
        } else {
          this.div.classList.remove(`faded`)

          // return this
        }
      },

      interactive(check = true) {

        if (check !== true) {
          this.div.classList.add(`non-interactive`)
          this.div.dataset.openned = true
          // return this
        } else {
          this.div.classList.remove(`non-interactive`)
          delete this.div.dataset.openned
          // return this
        }
      },
    }

    cardMap.set(card, cardModified)

  }

  this.cardMap = cardMap

}

function createArr(number) {
  let arr = []

  for (let i = 1 ; i <= number ; i++) {
    arr.push(i)
  }

  arr = arr.concat(arr)

  return arr
}

function shuffleFisherYates(arr) {
  for (let i = arr.length - 1 ; i > 0 ; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}





