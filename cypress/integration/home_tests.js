describe("Home Page Tests", () => {
  it("Opening home page works", () => {
    cy.visit("http://localhost:8000/");
  });

  it("Log in", () => {
    cy.get("[data-cy=dog]").click({ force: true });
  });

  it("View demo button works", () => {
    cy.get("[data-cy=demobtn]").click();
  });
});
