"use strict";

const describes = ["Scenario"];
const tests = [
  "Given",
  "When",
  "Then",
  "And"
];

const createFn = (testFn, arr) => {
  arr.forEach((name) => {
    global[name] = function (str, fn) {
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

createFn(describe, describes);
createFn(test, tests);
