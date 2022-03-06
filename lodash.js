const _ = require("lodash");

const heroes = [
  { name: "Wolverine", power: "claws", is_real: true },
  { name: "Batman", power: "rich", is_real: false },
  { name: "Iron man", power: "rich", is_real: false },
  { name: "Hulk", power: "strength", is_real: true },
];

let index = _.findIndex(heroes, function (lod) {
  return lod.name === "Batman";
});

console.log(index);

_.forEach(heroes, function (lod) {
  console.log("ladash forEach: ", lod.name);
});

const filter = _.filter(heroes, function (lod) {
  return lod.is_real;
});

console.log(filter);

const first = _.first(heroes);
console.log("first: ", first);

const last = _.last(heroes);
console.log("last:", last);
