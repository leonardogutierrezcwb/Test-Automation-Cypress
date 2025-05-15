describe('Testes na aplicação OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('CT01 - Login com credenciais válidas', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard')
  })

  it('CT02 - Login com credenciais inválidas', () => {
    cy.get('input[name="username"]').type('invalid')
    cy.get('input[name="password"]').type('wrong')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  it('CT03 - Campo username vazio', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-field-error-message').should('contain', 'Required')
  })

  it('CT04 - Recuperação de senha', () => {
    cy.contains('Forgot your password?').click()
    cy.url().should('include', '/requestPasswordResetCode')
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-text--h6').should('contain', 'Reset Password link sent successfully')
  })

it.only('CT05 - Acessa o Sistema e realiza Logout', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined")) {
      return false // Não falha o teste
    }
      return true
  })
  
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.get('.oxd-layout-footer').scrollIntoView()
      .should('contain', 'OrangeHRM, Inc. All rights reserved.') 
    cy.get('.oxd-userdropdown-tab').click()
    cy.get('.oxd-dropdown-menu').should('be.visible')
    cy.contains('.oxd-userdropdown-link', 'Logout').click()
    cy.url().should('include', '/auth/login')


  })
})