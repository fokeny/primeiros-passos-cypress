import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()

const dashboardPage = new DashBoardPage()

const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  const selectorsList = {
     
     
     
     firstNameField: "[name='firstName']",
     middleNameField: "[name='middleName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input",
     dateField: "[placeholder='yyyy-dd-mm']",
     dateCloseButton: ".--close",
     submitButton: "[type='submit']",
     selctGenericComboBox: ".oxd-select-text--active",
     secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
     thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)"
  }
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSeccess.username, userData.userSeccess.password)
    
    dashboardPage.checkDashBoardPage()

    menuPage.acessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriveLicenseNumberTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2027-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selctGenericComboBox).eq(0).click({ force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.selctGenericComboBox).eq(1).click({ force: true})
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
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

