const _ = require("lodash");

// executa uma dada função n vezes (quantidade passada no primeiro argumento)

function number() {
  return 2 * 2;
}

const result = _.times(3, number);

console.log(result);
