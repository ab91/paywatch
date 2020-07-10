describe("App Page Tests", () => {
  it("Navigate to App page", () => {
    cy.visit("http://localhost:8000/");
    cy.get("[data-cy=demobtn]").click();
    cy.location("pathname").should("equal", "/app");
  });

  it("Create Milestone", () => {
    cy.get("[data-cy=createbtn]").click();
  });

  it("Complete milestone after creation, input", () => {
    cy.get("[data-cy=createbtn]").click();
    cy.get(".bp3-editable-text-content").type("Make $100 by noon");
    cy.get(".completebtn").click();
  });

  it("Cancel milestone after creation", () => {
    cy.get("[data-cy=createbtn]").click();
    cy.get(".bp3-editable-text-content");
    cy.get(".cancelbtn").click();
  });

  it("Dark mode", () => {
    cy.get("[data-cy=darktoggle]")
      .click()
      .as("DarkToggle");
    cy.get("[data-cy=admin]")
      .parent()
      .should("have.css", "background-color")
      .and("match", /rgb\(6,.11,.16\)/);
    cy.get("@DarkToggle").click();
  });

  it("Check table after hours and sales input", () => {
    cy.get("[data-cy=defaultlog]").click();
    cy.get("[data-cy=log1btn]")
      .click()
      .as("Log");
    cy.get("@Log").click();
    cy.get("[data-cy=hours] > .bp3-editable-text").type("8");
    cy.get("[data-cy=sales] > .bp3-editable-text").type("20");
    cy.get("td")
      .eq(2)
      .contains("61");
    cy.get("td")
      .eq(3)
      .contains("453");
  });
});
