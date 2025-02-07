import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
     usernameField: "[name='username']",
     passwordField: "[name='password']",
     loginButton: "[type='submit']",
     sectionTitleTopBar: " .oxd-topbar-header-breadcrumb-module",
     dashBoardGrid: ".orangehrm-dashboard-grid",
     wrongCredentialAlert: "[role='alert']",
     myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
     firstNameField: "[name='firstName']",
     middleNameField: "[name='middleName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input",
     dateField: "[placeholder='yyyy-dd-mm']",
     dateCloseButton: ".--close",
     saveButton: "[type='submit']"
  }
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSeccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSeccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriveLicenseNumberTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2027-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(cy.get('.oxd-toast-close'))
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})