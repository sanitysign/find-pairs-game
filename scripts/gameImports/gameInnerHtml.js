export const gameInnerHtml = `
<div class="guess__field">
</div>
<div class="guess__settings">
<div class="guess__settings-container">
  <div class="guess__input-wrap">
    <label class="guess__input-label guess__text">
      Cols
      <input class="guess__input-col guess__input guess__text" type="text" value="4">
    </label>
    <label class="guess__input-label guess__text">
      Rows
      <input class="guess__input-row guess__input guess__text" type="text" value="4">
    </label>
  </div>
  <button class="guess__start-btn guess__btn guess__text">Start</button>
  <button class="guess__reset-btn guess__btn guess__text">Reset</button>
  <div class="guess__display guess__text">Time is over</div>
</div>
<label  class="switch guess__switch">
  <input type="checkbox" class="switch__input guess-switch__input">
  <div class="switch__slider guess-switch__slider"></div>
</label>
</div>
<div class="guess__timebar">
<div class="guess__indicator"></div>
</div>
</div>
`

