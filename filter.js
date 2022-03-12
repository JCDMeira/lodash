//_.filter()

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

const result1 = _.filter(users, { gender: "female" });
const result = _.filter(users, (o) => o.age >= 20);

console.log(result);
console.log(result1);
