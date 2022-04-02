/// < reference types='Cypress' />

describe("fourth test", () => {
    it("should first", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");

        cy.get("#alertbtn").click();
        cy.get('[value="Confirm"]').click();

        cy.on("window.alert", (str) => {
            expect(str).to.equal(
                "Hello, share this practice page and share your knowlege"
            );
        });
    });
});