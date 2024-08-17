/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

Given(`I open the parabank site`, () => {
  cy.fixture("parabank.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

When(`I click on the Register link`, () => {
  parabank.clickRegisterLink();
});

When(`I add valid registration data`, () => {
  parabank.fillRegistrationForm();
});

When(`I click on the Register button`, () => {
  parabank.clickRegisterBtn();
});

Then(`I verify user registered successfully`, () => {
  parabank.verifyUserRegistration();
});

Given(`I open the URL {string}`, (url) => {
  cy.visit(url);
});

When(`I enter the valid username`, () => {
  parabank.fillUserNameLogin();
});

When(`I enter the valid password`, () => {
  parabank.fillPasswordLogin();
});

Then(`I click the Login button`, () => {
  parabank.clickLoginBtn();
});

Then(
  `I verify that the user is able to login successfully in the ParaBank application`,
  () => {
    parabank.verifyLoginSuccess()
  }
);

When(`I navigate to my account page`, () => {
  
});

Then(`I click on Open New Account`, () => {
  parabank.clickOpenNewAcc()
  
});

Then(`I verify that the field {string} is displayed`, () => {
 parabank.verifyTxtOfOpenAcc()
});

Then(`I verify that the Account Overview page is displayed`, () => {
  parabank.verifyAccountPageOverview()
 });

 Then(`I click on Accounts Overview`, () => {
  parabank.clickAccOverview()
 });

 Then(`I verify that the user is able to view the Account Overview page`, () => {
  parabank.verifyAccountPageOverview()
 });
 
 







