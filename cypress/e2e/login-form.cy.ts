describe("Login Form", () => {
  it("login and got to home view", () => {
    cy.visit("/");
    cy.get("[data-cy=login]").click();
    cy.contains("h3", "Sign in to our platform");
    cy.get("[data-test=email-field]").type("ron@dot.com");
    cy.get("[data-test=password-field]").type("sdfasfsdfggf");
    cy.get("[data-test=submit-button]").click();
    cy.get("[data-cy=close-dialog-button]").click();
    cy.get("[data-cy=home]").click();
  });
});
