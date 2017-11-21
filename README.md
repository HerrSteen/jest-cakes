# Jest-cakes
What Mocha-cakes is for Mocha. Jest-cakes is for Jest.

Let's you use 'Given', 'When', 'Then' and 'And' in Jest to describe your tests.

## Installation

NPM:

```
npm install --save-dev jest-cakes
```

## Usage
```
require("../jest-cakes");

//Use any of the functions to describe your test
Scenario("First scenario", () => {
  Given("Data is loaded", (done) => {
    done();
  });
  
  When("We request site", () => {
    //do something..
  });

  Then("We get expected result", () => {
    //expect(..).toBe(..);
  });
});
```
