export function showAllCards() {

  for (const card of this.cards) {
    card.textContent = this.cardMap.get(card).number
    card.dataset.openned = true
  }
}
