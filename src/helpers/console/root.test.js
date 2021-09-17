const Vls = require("./root");

Vls.log("? MINGW64 ~/_V_/App");

Vls.log("yeaaaa");

Vls.log("Ouh EYEAAHAH");

Vls.info("? MINGW64 ~/_V_/App");

Vls.info("yeaaaa");

Vls.info("Ouh EYEAAHAH");

Vls.warn("? MINGW64 ~/_V_/App");

Vls.warn("yeaaaa");

Vls.warn("Ouh EYEAAHAH");

Vls.count("? MINGW64 ~/_V_/App");

Vls.count("yeaaaa");

Vls.count("Ouh EYEAAHAH");

Vls.group("? MINGW64 ~/_V_/App");

Vls.group("yeaaaa");

Vls.group("Ouh EYEAAHAH");

Vls.groupEnd("? MINGW64 ~/_V_/App");

Vls.groupEnd("yeaaaa");

Vls.groupEnd("Ouh EYEAAHAH");

console.table(["apples", "oranges", "bananas"]);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);

// an array of arrays

var people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
console.table(people);

// an object whose properties are objects

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
