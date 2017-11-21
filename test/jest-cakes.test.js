require("../jest-cakes");

describe("jest-cakes", () => {
  Scenario("Test functions are available in global scope", () => {
    let incement;

    Given("Increment is set", () => {
      increment = 0
    });

    When("Incement is increased", () => {
      increment++;
    });

    Then("Expect increment to be one", () => {
      expect(increment).toBe(1);
    });

    When.skip("Increment is decreased ", () => {
      increment--;
    });

    Then("Increment should still be one", () => {
      expect(increment).toBe(1);
    });
  });
});
