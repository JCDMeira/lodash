const _ = require("lodash");

// adicionar propriedades à um objeto já existente

const movie = { name: "Game of Thrones" };
const result = _.assign({ ticket_price: "$20", season: 8 }, movie);

console.log(result);
