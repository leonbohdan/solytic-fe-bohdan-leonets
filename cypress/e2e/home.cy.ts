describe("Home View", () => {
  it("check home view", () => {
    cy.visit("/");
    cy.contains("h1", "Frontend Coding Challenge");
  });
});
