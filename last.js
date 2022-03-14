//_.last()
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

const result = _.last(users);

console.log(result);
