import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
     
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSeccess.username, userData.userSeccess.password)
    
    dashboardPage.checkDashBoardPage()

    menuPage.acessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeID', 'OtherID', 'DriveLicenseTest', '2027-03-02')
    myInfoPage.fillStatus('1994-02-10')
    myInfoPage.saveForm()
    
  })
})

