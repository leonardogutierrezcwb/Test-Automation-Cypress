// Importa as bibliotecas necessárias (se precisar)


// Cria um comando customizado de login usando cy.session
Cypress.Commands.add('login', () => {
  cy.viewport('macbook-16') // Define a resolução da tela (opcional)
  cy.session('user-session', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Preenche o formulário de login
    cy.get('input[name="username"]').type('Admin', { log: false })
    cy.get('input[name="password"]').type('admin123', { log: false })
    cy.get('.orangehrm-login-button').click()

    // Valida que foi redirecionado para o dashboard
    cy.url().should('include', '/dashboard')
    cy.get('.oxd-topbar-header-breadcrumb').should('be.visible')
  })
})