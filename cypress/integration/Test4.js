/// < reference types='Cypress' />

describe("fourth test", () => {
  it("should first", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    // on: fiire an event and (things needs to compare)
    cy.on("window.alert", (str) => {
      expect(str).to.equal("Hello, Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.url().should("include", "academy");

    cy.go("back");
  });