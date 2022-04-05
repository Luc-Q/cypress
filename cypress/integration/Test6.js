/// < reference types='Cypress' />

describe("first", () => {
  it("should first", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    cy.get('#mousehover').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
      }
    });
  });
});
