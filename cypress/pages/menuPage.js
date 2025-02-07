class MenuPage {
    selectorsList() {
        const selectors = {
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            recruitamentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",

        }
        return selectors
    }

    acessBuzzButton() {
        cy.get(this.selectorsList().buzzButton).click()
    }

    acessClaimButton() {
        cy.get(this.selectorsList().claimButton).click()
    }

    acessMaintenanceButton() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    acessDirectoryButton() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    acessDashBoardButton() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    acessPerformanceButton() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    acessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    acessRecruitmentButton() {
        cy.get(this.selectorsList().recruitamentButton).click()
    }

    acessTimeButton() {
        cy.get(this.selectorsList().timeButton).click()
    }

    acessLeaveButton() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    acessPimButton() {
        cy.get(this.selectorsList().pimButton).click()
    }

    acessAdminButton() {
        cy.get(this.selectorsList().adminButton).click()
    }
   
}
export default MenuPage