describe("Home Page Automation", () => {
  it("Load home page", () => {
    cy.visit("http://localhost:8000/");
  });

  it("Log in to application", () => {
    cy.get("[data-cy=login]").click({ force: true });
  });

  it("Check button color", () => {
    cy.get("[data-cy=createbtn]")
      .should("have.css", "color")
      .and("eq", "rgb(28, 33, 39)")
  });
});
