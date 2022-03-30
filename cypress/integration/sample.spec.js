describe("my first tet", () => {
  it("Gets, types and asserts", () => {
    // Arrage - setup inital app state
    // - visit a web page
    // - query for an element
    // Act - take an action
    // - interaction with that element
    // Assert - make an assertion
    // - make an assertion about page content
    cy.visit("http://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
