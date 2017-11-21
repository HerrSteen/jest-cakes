"use strict";

//loop
const describes = [
  "Scenario",
  "Feature",
  "scenario",
  "feature"
];
const tests = [
  "Given",
  "When",
  "Then",
  "And",
  "given",
  "when",
  "then",
  "and"
];

const createFn = (testFn, arr) => {
  arr.forEach((name) => {
    global[name] = global[name.toLowerCase()] = function (str, fn) {
      testFn(`${name}: ${str}`, fn);
    };

    global[name].skip = function (str, fn) {
      testFn.skip(`${name}: ${str}`, fn);
    };

    global[name].only = function (str, fn) {
      testFn.only(`${name}: ${str}`, fn);
    };
  });
};

try {
  createFn(describe, describes);
  createFn(test, tests);
} catch(e) {
  console.log("jest-cakes:", e);
}
