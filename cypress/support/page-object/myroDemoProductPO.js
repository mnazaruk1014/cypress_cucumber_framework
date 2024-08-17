///<reference types="cypress"/>

class demoProductPo {

    //special method
    constructor(){
        this.AddToCartButton = "#tbodyid > div.row > div > a"

    }


    clickAddToCartButton(){
        cy.get(this.AddToCartButton).click()
    }
}
export default demoProductPo;