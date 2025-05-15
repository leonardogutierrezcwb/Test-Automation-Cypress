class ForgotPasswordPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    submitButton: () => cy.get('button[type="submit"]'),
    successMessage: () => cy.get('.oxd-text--h6')
  }

  verifyPage() {
    cy.url().should('include', '/requestPasswordResetCode')
    return this
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username)
    return this
  }

  submit() {
    this.elements.submitButton().click()
    return this
  }

  verifySuccessMessage() {
    this.elements.successMessage().should('contain', 'Reset Password link sent successfully')
    return this
  }
}

export default new ForgotPasswordPage()