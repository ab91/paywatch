describe("App Page Tests", () => {
  it("Navigate to App page", () => {
    cy.visit("https://www.paywatch.app/");
    cy.get("[data-cy=demobtn]").click();
    cy.location("pathname").should("equal", "/app");
  });

  it("SHOULD SUCCEED", () => {
    cy.get("[data-cy=createbtn]").click();
    cy.get(".Toastify").prev().should('not.have.value','translateX(500px)');
  });

  it("Dark mode", () => {
    cy.get("[data-cy=darktoggle]")
      .click()
      .as("DarkToggle");
    cy.get("[data-cy=admin]")
      .parent()
      .should("have.css", "background-color")
      .and("match", /rgb\(6,.11,.16\)/);
  });
});

