import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
     usernameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "[type='submit']",
     sectionTitleTopBar: " .oxd-topbar-header-breadcrumb-module",
     dashBoardGrid: ".orangehrm-dashboard-grid",
     wrongCredentialAlert: "[role='alert']"
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSeccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSeccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})