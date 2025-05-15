class DashboardPage {
  elements = {
    headerBreadcrumb: () => cy.get('.oxd-topbar-header-breadcrumb'),
    userDropdown: () => cy.get('.oxd-userdropdown-tab'),
    dropdownMenu: () => cy.get('.oxd-dropdown-menu'),
    logoutLink: () => cy.contains('.oxd-userdropdown-link', 'Logout'),
    footer: () => cy.get('.oxd-layout-footer')
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
    this.elements.headerBreadcrumb().should('contain', 'Dashboard')
    return this
  }

  scrollToFooter() {
    this.elements.footer().scrollIntoView()
    return this
  }

  verifyFooterText() {
    this.elements.footer().should('contain', 'OrangeHRM, Inc. All rights reserved.')
    return this
  }

  logout() {
    this.elements.userDropdown().click()
    this.elements.dropdownMenu().should('be.visible')
    this.elements.logoutLink().click()
    cy.url().should('include', '/auth/login')
  }
}

export default new DashboardPage()