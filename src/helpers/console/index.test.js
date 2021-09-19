/*jshint esversion: 8 */
const vCon = require(".");

vCon.log("? MINGW64 ~/_V_/App");

vCon.log("yeaaaa");

vCon.log("Ouh EYEAAHAH");

vCon.info("? MINGW64 ~/_V_/App");

vCon.info("yeaaaa");

vCon.info("Ouh EYEAAHAH");

vCon.warn("? MINGW64 ~/_V_/App");

vCon.warn("yeaaaa");

vCon.warn("Ouh EYEAAHAH");

vCon.count("? MINGW64 ~/_V_/App");

vCon.count("yeaaaa");

vCon.count("Ouh EYEAAHAH");

vCon.group("? MINGW64 ~/_V_/App");

vCon.group("yeaaaa");

vCon.group("Ouh EYEAAHAH");

vCon.groupEnd("? MINGW64 ~/_V_/App");

vCon.groupEnd("yeaaaa");

vCon.groupEnd("Ouh EYEAAHAH");

vCon.table(["apples", "oranges", "bananas"]);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

vCon.table(me);

// an array of arrays

var people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
vCon.table(people);

// an object whose properties are objects

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

vCon.table(family);
