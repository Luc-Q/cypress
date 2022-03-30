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
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);

    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").then((logoelement) => {
      cy.log(logoelement.text());
    });
  });
});
