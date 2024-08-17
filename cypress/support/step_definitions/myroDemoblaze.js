/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
// import demo_home_PO from "../page-object/demo_home_PO"
import myroDemoProduct_Po from "../page-object/myroDemoProductPO";
import myroDemo_cart_PO from "../page-object/myroDemo_cart_PO";
import myroDemoHomePO from "../page-object/myroDemoHomePO"


// Given("I navigate to the Demoblaze homepage", () => {
//   cy.visit("https://www.demoblaze.com/");
// });

Given("I navigate to the Demoblaze homepage", () => {
  cy.fixture("myronDemoblaze.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});



var homePage = new myroDemoHomePO();

// When("I click a product {string}", (product) => {
//   homePage.clickProduct(product);
// });


When("I click on Samsung Phone", () => {
  cy.fixture("myronDemoblaze.json").then((data) => {
    homePage.clickProduct(data.products.s6);
  });
});

// Then("I check samsung product description", () => {
//   cy.fixture("myronDemoblaze.json").then((data) => {
//     cy.get('#more-information > p').should("have.text", data.productDescription.samsung)
//   });
// });




let productPage = new myroDemoProduct_Po()

Then("I add the product to the cart", () => {
  productPage.clickAddToCartButton()
});

Then("the product should be added to the cart", () => {
  cy.on("window:alert", (message) => {
    expect(message).to.equal("Product added");
  });
});

// Then("I check samsung product description", () => {
//   cy.fixture("myronDemoblaze.json").then((data) => {
//     cy.get('#more-information > p').should("have.text", data.productDescription["samsung"])
//   });
// });


When("I click on the Cart button", () => {
 homePage.clickCartButton()
 
});


let cartPage = new myroDemo_cart_PO()


Then("I check Products label", () => {
  cartPage.verifyProductLabelTxt()
})
Then("I check Total label", () => {
  cartPage.verifyTotalLabelTxt()
})
Then("I check price 360 label", () => {
  cartPage.verifyTotalPrice()
})
Then("I check Pic label", () => {
  cartPage.verifyTheadPicText()
})
Then("I check Title label", () => {
  cartPage.verifyTheadTitleText()
})
Then("I check Price label", () => {
  cartPage.verifyTheadPriceText()
})
Then("I check x label", () => {
  cartPage.verifytHeadXtext()
})



Then("I click the Place Order Button", () => {
  cartPage.clickPlaceOrderbutton()
});

Then("I fill out the Place Order Field", () => {
  cartPage.fillPlaceOrderForm("billyjoebob","USA","Sacramento","4111111111111111","03","2028")
  
})

Then("I should see an order confirmation", () => {
  cartPage.verifyOrderConfirmation()
})

Then ("I click OK button", () => {
  cartPage.clickOkButton()
})









When("I click on the Sign Up button", () => {
  cy.get(
    "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
  ).click({ force: true });
  cy.wait(1000);
});

When("I enter username {string} password {string}", (username, password) => {
  cy.get("#sign-username").type(username, { force: true });
  cy.wait(1000);
  cy.get("#sign-password").type(password, { force: true });
});

When("I click on Sign Up button", () => {
  cy.get(
    "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
  ).click({ force: true });
  cy.wait(1000);
});

Then("I should see a registration confirmation", () => {
  cy.on("window:alert", (message) => {
    expect(message).to.equal("Sign up successful");
  });
});

When("I click on the Log In button", () => {
  cy.get("#login2").click();
  cy.wait(1000);
});

When(
  "I enter username {string} and password {string}",
  (username, password) => {
    cy.get("#loginusername").type(username);
    cy.wait(1000);
    cy.get("#loginpassword").type(password);
  }
);

When("I click Log In in the modal", () => {
  cy.get('.modal-footer .btn.btn-primary[onclick="logIn()"]').click();
  cy.wait(2000);
});
Then("I verify should be logged in", () => {
  cy.get("#nameofuser").should("have.text", "Welcome billyjoebob");
});

// When("I click a product {string}", (product) => {
//   cy.contains(".card-title", product).click();
//   cy.wait(1000);
// });

// Then("I add the product to the cart", () => {
//   cy.get('a.btn.btn-success.btn-lg[onclick="addToCart(1)"]').click();
// });

// Then("the product should be added to the cart", () => {
//   // the www.demoblaze.com says Product added to the cart doesn't appear in cypress
// });

// Then("the product should be added to the cart", () => {
//   cy.on("window:alert", (message) => {
//     expect(message).to.equal("Product added");
//   });
// });

// When("I click on the Cart button", () => {
//   cy.get("#cartur").click();
//   cy.wait(1000);
// });

// Then("I click the Place Order Button", () => {
//   cy.get('[data-target="#orderModal"]').click();
// });

// When("I fill out the Place Order Field", () => {
//   cy.get("#name").type("billyjoebob");
//   cy.get("#country").type("USA");
//   cy.get("#city").type("Sacramento");
//   cy.get("#card").type("4111111111111111");
//   cy.get("#month").type("03");
//   cy.get("#year").type("2028");
//   cy.get(
//     'button.btn.btn-primary[type="button"][onclick="purchaseOrder()"]'
//   ).click();
// });

// Then("I should see an order confirmation", () => {
//   cy.wait(1000);
//   cy.contains("Thank you for your purchase!").should("be.visible");
// });

// Then("click ok button", () => {
//   cy.get(".confirm").click();
// });
