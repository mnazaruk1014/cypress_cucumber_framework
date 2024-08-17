/// <reference types="cypress" />

class parabank_PO {
  //Elements
  constructor() {
    this.RegisterLinkSelector = "#loginPanel > p:nth-child(3) > a";
    this.FirstNameSelector = "input[id='customer.firstName']";
    this.LastNameSelector = "input[id='customer.lastName']";
    this.AddressSelector = "input[id='customer.address.street']";
    this.CitySelector = "input[id='customer.address.city']";
    this.StateSelector = "input[id='customer.address.state']";
    this.ZipCodeSelector = "input[id='customer.address.zipCode']";
    this.PhoneSelector = "input[id='customer.phoneNumber']";
    this.SsnSelector = "input[id='customer.ssn']";
    this.UserNameRegistSelector = "input[id='customer.username']";
    this.PasswordRegistSelector = "input[id='customer.password']";
    this.ConfirmPasswordSelector = "#repeatedPassword";
    this.RegisterBtnSelector = "input[value='Register']";
    this.VerificationTxtRegistrationSelector = "#rightPanel > p";
    this.LoginBtnSelector = "input[value='Log In']";
    this.UserNameLoginSelector = "input[name='username']";
    this.PasswordLoginSelector = "input[name='password']";
    this.AccountOverviewSelector = "a[href='overview.htm']";
    this.OpenNewAccountLocator = "a[href='openaccount.htm']";
    this.VerificationTxtOfTypeAcc = "#openAccountForm > form > p:nth-child(1) > b";
    
  }

  //Functions
  clickRegisterLink() {
    cy.get(this.RegisterLinkSelector).click();
  }
  clickRegisterBtn() {
    cy.get(this.RegisterBtnSelector).click();
  }
  clickLoginBtn() {
    cy.get(this.LoginBtnSelector).click();
  }
  clickOpenNewAcc(){
    cy.get(this.OpenNewAccountLocator).click()
  }
  clickAccOverview(){
    cy.get(this.AccountOverviewSelector).click()
  }
  

  fillRegistrationForm() {
    cy.fixture("parabank.json").then((data) => {
      const randomNumber = Math.floor(Math.random() * 10000);
      const randomUsername = `user${randomNumber}`;
      Cypress.env("randomUsername", randomUsername);

      cy.get(this.FirstNameSelector).type(data.registrationData.FirstName);
      cy.get(this.LastNameSelector).type(data.registrationData.LastName);
      cy.get(this.AddressSelector).type(data.registrationData.Address);
      cy.get(this.CitySelector).type(data.registrationData.City);
      cy.get(this.StateSelector).type(data.registrationData.State);
      cy.get(this.ZipCodeSelector).type(data.registrationData.ZipCode);
      cy.get(this.PhoneSelector).type(data.registrationData.Phone);
      cy.get(this.SsnSelector).type(data.registrationData.Ssn);
      cy.get(this.UserNameRegistSelector).type(randomUsername);
      cy.get(this.PasswordRegistSelector).type(data.registrationData.Password);
      cy.get(this.ConfirmPasswordSelector).type(data.registrationData.ConfirmPassword);
    });
  }

  verifyUserRegistration() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.VerificationTxtRegistrationSelector).should(
        "have.text",
        data.RegistrationTextVerification
      );
    });
  }


  fillUserNameLogin() {
    const randomUsername = Cypress.env("randomUsername");
    cy.get(this.UserNameLoginSelector).type(randomUsername);
  }

  fillPasswordLogin() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.PasswordLoginSelector).type(data.registrationData.Password);
    });
  }

  verifyLoginSuccess(){
    cy.fixture("parabank.json").then((data) => {
      cy.contains(data.AccountsOverviewTxt).should("be.visible");

    })
  }

  verifyTxtOfOpenAcc(){
    cy.fixture("parabank.json").then((data)=> {
      cy.get(this.VerificationTxtOfTypeAcc).should("have.text",data.TypeOfAccountsverification)
    })
  }

  verifyAccountPageOverview(){
    cy.fixture("parabank.json").then((data) => {
      cy.contains(data.AccountsOverviewTxt).should("be.visible");

    })
  }

  

}

export default parabank_PO;
