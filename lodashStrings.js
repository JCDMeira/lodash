const _ = require("lodash");

const heroes = [
  { name: "Wolverine", power: "claws", is_real: true },
  { name: "Batman", power: "rich", is_real: false },
  { name: "Iron man", power: "rich", is_real: false },
  { name: "Hulk", power: "strength", is_real: true },
];

const camelCase = _.camelCase("Iron man");
console.log(camelCase);

const kebabCase = _.kebabCase("Iron man");
console.log(kebabCase);

const snakeCase = _.snakeCase("Iron man");
console.log(snakeCase);

const capitalize = _.capitalize("Iron man");
console.log(capitalize);

// # A string, a pesquisa, o que vai motificar
const replace = _.replace("Iron man", "man", "Batman");
console.log(replace);
