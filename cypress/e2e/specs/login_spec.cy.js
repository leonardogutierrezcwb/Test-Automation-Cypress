import LoginPage from '../pages/LoginPage.js'
import DashboardPage from '../pages/DashboardPage.js'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.js'

describe('Testes na aplicação OrangeHRM', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('CT01 - Login com credenciais válidas', () => {
    LoginPage.typeUsername('Admin')
    LoginPage.typePassword('admin123')
    LoginPage.submit()
    DashboardPage.verifyDashboard()
  })

  it('CT02 - Login com credenciais inválidas', () => {
    LoginPage.typeUsername('invalid')
    LoginPage.typePassword('wrong')
    LoginPage.submit()
    LoginPage.elements.errorMessage().should('contain', 'Invalid credentials')
  })

  it('CT03 - Campo username vazio', () => {
    LoginPage.typePassword('admin123')
    LoginPage.submit()
    LoginPage.elements.requiredFieldMessage().should('contain', 'Required')
  })

  it('CT04 - Recuperação de senha', () => {
    LoginPage.clickForgotPassword()
    ForgotPasswordPage
      .verifyPage()
      .typeUsername('Admin')
      .submit()
      .verifySuccessMessage()
  })

  it('CT05 - Acessa o Sistema e realiza Logout', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined")) {
        return false
      }
      return true
    })
    
      LoginPage.typeUsername('Admin')
      LoginPage.typePassword('admin123')
      LoginPage.submit()
          
      DashboardPage
      .verifyDashboard()
      .scrollToFooter()
      .verifyFooterText()
      .logout()
  })
})