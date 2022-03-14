//_.chunk()
// - quebra o array em pequenas partes

const _ = require("lodash");

const users = [
  { name: "Tiago Matos", age: 20, gender: "male" },
  { name: "Jon Snow", age: 18, gender: "male" },
  { name: "Wonder woman", age: 22, gender: "female" },
  { name: "Tiago Matos", age: 20, gender: "male" },
  { name: "Jon Snow", age: 18, gender: "male" },
  { name: "Wonder woman", age: 22, gender: "female" },
  { name: "Tiago Matos", age: 20, gender: "male" },
  { name: "Jon Snow", age: 18, gender: "male" },
  { name: "Wonder woman", age: 22, gender: "female" },
];

// # passa o array e o número de itens por divisão.
const result = _.chunk(users, 3);

console.log(result);
