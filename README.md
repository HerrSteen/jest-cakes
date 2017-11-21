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

Scenario("Feature test", () => {
  Given("Data is loaded", (done) => {
    done();
  });

  When("Site is requested", () => {
    //do something..
  });

  Then("We get expected result", () => {
    //expect(..).toBe(..);
  });

  And.skip("Do this later", () => {
  });
});
```
