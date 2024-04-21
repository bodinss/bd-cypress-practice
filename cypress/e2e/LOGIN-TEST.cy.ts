describe("Login Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("it can trigger login panel", () => {
    cy.get('[data-cy="login-button"]').click();
  });
  it("shows the error messages correctly when leaving both login inputs empty.", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="submit-login"]').click();
    cy.get('[data-cy="empty-email-error"]').should("exist");
    cy.get('[data-cy="empty-password-error"]').should("exist");
  });
  it("shows the error messages correctly when leaving email input empty.", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-password-input"]').type("text.123456789");
    cy.get('[data-cy="submit-login"]').click();
    cy.get('[data-cy="empty-email-error"]').should("exist");
    cy.get('[data-cy="empty-password-error"]').should("not.exist");
  });
  it("shows the error messages correctly when leaving password input empty.", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-email-input"]').type("test@gmail.com");
    cy.get('[data-cy="submit-login"]').click();
    cy.get('[data-cy="empty-email-error"]').should("not.exist");
    cy.get('[data-cy="empty-password-error"]').should("exist");
  });
  it("can access to Register Page from Login panel.", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
});
