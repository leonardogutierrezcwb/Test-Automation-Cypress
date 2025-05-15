class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    submitButton: () => cy.get('button[type="submit"]'),
    forgotPasswordLink: () => cy.contains('Forgot'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
    requiredFieldMessage: () => cy.get('.oxd-input-field-error-message')
  }

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username)
  }

  typePassword(password) {
    this.elements.passwordInput().type(password)
  }

  submit() {
    this.elements.submitButton().click()
  }

  clickForgotPassword() {
    this.elements.forgotPasswordLink().click()
  }
}

export default new LoginPage()