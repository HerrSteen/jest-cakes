require("../jest-cakes");

Feature("jest-cakes", () => {
  Scenario("Test functions are available in global scope", () => {
    let incement;

    given("increment is set", () => {
      increment = 0
    });

    When("incement is increased", () => {
      increment++;
    });

    Then("we expect increment to be one", () => {
      expect(increment).toBe(1);
    });

    When.skip("increment is decreased ", () => {
      increment--;
    });

    Then("increment should still be one", () => {
      expect(increment).toBe(1);
    });
  });
});
