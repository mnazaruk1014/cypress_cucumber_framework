/// <reference types="cypress" />

class demo_PO {

    //special method
    constructor() {
        //CSS selectors
        //Outline the Top Bar
        this.homeButton = "a[href='index.html'][class='nav-link']";
        this.contactButton = "a[data-target='#exampleModal']";
        this.aboutUsButton = "#navbarExample > ul > li:nth-child(3) > a";
        this.cartButton = "#cartur";
        this.loginButton = "#login2";
        this.signUpButton = "#signin2";

        //the Carousel
        this.leftArrow = ".carousel-control-prev-icon"
        this.rightArrow = ".carousel-control-next-icon"


        //The categories
        this.categoriesText = "#cat"
        this.phonesButton = "#body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)"
        this.laptopsButton = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)"
        this.monitorsButtons = "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)"
        
        //footer text
        this.aboutUsText = "#fotcont > div:nth-child(1) > div"
        this.getInTochText = "#fotcont > div.col-sm-3.col-lg-3.col-md-3 > div > div"
        this.productStoreText = "#fotcont > div:nth-child(3) > div > div > h4"
        
        //header
        this.productStore =  "#nava"
        //product
        this.cardtitle = ".card-title"

    }

    clickProduct(product) {
        cy.contains(this.cardtitle, product).click();
        cy.wait(1000);
    }

    clickHome() {
        cy.get(this.homeButton).click()
    }

    clickCartButton() {
        cy.get(this.cartButton).click()
    }
}


export default demo_PO;