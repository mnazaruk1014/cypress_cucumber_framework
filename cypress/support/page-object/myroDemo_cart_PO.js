///<reference types = "cypress"/>

class demo_cart_PO {
    constructor() {
      this.productLabelSelector = "#page-wrapper > div > div.col-lg-8 > h2";
      this.productlabelText = "Products"
      this.totalLabelSelector = "#page-wrapper > div > div.col-lg-1 > h2";
      this.totalLabelText = "Total"
      this.totalPriceSelector = "#totalp";
      this.label360Text = "360";
      this.tHeadPicSelector = "#page-wrapper > div > div.col-lg-8 > div > table > thead > tr > th:nth-child(1)";
      this.tHeadPicText = "Pic";
      this.tHeadTitleSelector = "#page-wrapper > div > div.col-lg-8 > div > table > thead > tr > th:nth-child(2)"
      this.tHeadTitleText = "Title";
      this.tHeadPriceSelector = "#page-wrapper > div > div.col-lg-8 > div > table > thead > tr > th:nth-child(3)"
      this.tHeadPriceText = "Price";
      this.tHeadXSelector = "#page-wrapper > div > div.col-lg-8 > div > table > thead > tr > th:nth-child(4)"
      this.tHeadXtext = "x"
     
      this.PlaceOrderButton = "#page-wrapper > div > div.col-lg-1 > button";
      this.nameInput = "#name";
      this.countryInput = "#country";
      this.cityInput = "#city";
      this.cardInput = "#card";
      this.monthInput = "#month";
      this.yearInput = "#year";
      this.purchaseButton ='button.btn.btn-primary[type="button"][onclick="purchaseOrder()"]';
      this.confirmationMessageSelector = "body > div.sweet-alert.showSweetAlert.visible > h2"
      this.confirmationMessageText = "Thank you for your purchase!";
      this.confirmButton = ".confirm";
    }
  
    verifyProductLabelTxt(){
      cy.get(this.productLabelSelector).should("have.text", this.productlabelText)
    }
    verifyTotalLabelTxt(){
      cy.get(this.totalLabelSelector).should('have.text',this.totalLabelText)
    }
    verifyTotalPrice(){
      cy.get(this.totalPriceSelector).should('have.text',this.label360Text)
    }
    verifyTheadPicText(){
      cy.get(this.tHeadPicSelector).should('have.text',this.tHeadPicText)
    }
    verifyTheadTitleText(){
      cy.get(this.tHeadTitleSelector).should('have.text',this.tHeadTitleText)
    }
    verifyTheadPriceText(){
      cy.get(this.tHeadPriceSelector).should('have.text',this.tHeadPriceText)
    }
    verifytHeadXtext(){
      cy.get(this.tHeadXSelector).should('have.text',this.tHeadXtext)
    }
  
  
  
    fillPlaceOrderForm(name, country, city, card, month, year) {
      cy.get(this.nameInput).type(name);
      cy.get(this.countryInput).type(country);
      cy.get(this.cityInput).type(city);
      cy.get(this.cardInput).type(card);
      cy.get(this.monthInput).type(month);
      cy.get(this.yearInput).type(year);
      cy.get(this.purchaseButton).click();
    }
  
  
    verifyOrderConfirmation(){
      cy.get(this.confirmationMessageSelector).should('have.text',this.confirmationMessageText)
    }
  
    clickPlaceOrderbutton() {
      cy.get(this.PlaceOrderButton).click();
    }
  
    clickOkButton(){
      cy.get(this.confirmButton).click()
    }
  }
  
  export default demo_cart_PO;
  