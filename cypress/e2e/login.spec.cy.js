import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()

describe('Login Orange HRM Tests', () => {
     
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSeccess.username, userData.userSeccess.password)
    
    dashboardPage.checkDashBoardPage()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})

