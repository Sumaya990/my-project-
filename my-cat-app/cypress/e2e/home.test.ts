describe("Home", () => {
  it("shows the homepage title", () => {
    cy.visit("/");
    cy.contains("My App").should("exist");
  });
});