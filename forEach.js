//_.forEach()

const _ = require("lodash");

const wonderWoman = { name: "Wonder woman", age: 22, gender: "female" };

_.forEach(wonderWoman, (o) => {
  console.log(o);
});
