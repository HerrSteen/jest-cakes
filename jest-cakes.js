"use strict";

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

const createFn = (testFn, arr, separator) => {
  arr.forEach((name) => {
    global[name] = function (str, fn) {
      testFn(`${name}${separator} ${str}`, fn);
    };

    global[name].skip = function (str, fn) {
      testFn.skip(`${name}${separator} ${str}`, fn);
    };

    global[name].only = function (str, fn) {
      testFn.only(`${name}${separator} ${str}`, fn);
    };
  });
};

try {
  createFn(describe, describes, ":");
  createFn(test, tests, "");
} catch(e) {
  console.log("jest-cakes:", e);
}
