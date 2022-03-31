/// <reference types='Cypress' />

describe("my first test", () => {
  it("my first test", () => {
    // Arrage - setup inital app state
    // - visit a web page
    // - query for an element
    // Act - take an action
    // - interaction with that element
    // Assert - make an assertion
    // - make an assertion about page content
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .click()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    cy.get("select").select("option2").should("have.value", "option2");
  });
});
