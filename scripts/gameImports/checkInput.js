export function checkInput(value) {

  if(+value != NaN && (+value >= 5 && +value <= 10)) return +value
  return 4
}
