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

const result1 = _.find(users, { name: "Jon Snow" });
const result2 = _.find(users, (o) => o.name === "Tiago Matos");

console.log(result1);
console.log(result2);
