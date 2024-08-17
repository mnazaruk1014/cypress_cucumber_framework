@demo @myroslav
Feature: Demoblaze site


    # @demo @myroslav
    # Scenario: User Registration
    #     Given I navigate to the Demoblaze homepage
    #     When I click on the Sign Up button
    #     When I enter username "billyjoebob" password "password1"
    #     When I click on Sign Up button
    #     Then I should see a registration confirmation


       
    # @demo @myroslav
    # Scenario: User Login
    #     Given I navigate to the Demoblaze homepage
    #     When I click on the Log In button
    #     And I enter username "billyjoebob" and password "password1"
    #     And I click Log In in the modal
    #     Then I verify should be logged in


        # Given I open url "https://www.demoblaze.com/index.html"
        # When I click on element with selector "#login2"
        # When I type "billyjoebob" into element with selector "#loginusername"
        # When I type "password1" into element with selector "#loginpassword"
        # When I click on element with selector "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"


    @demo @myroslav
    Scenario: Add Product to Cart
        Given I navigate to the Demoblaze homepage
        # When I click a product "Nokia lumia 1520"
        When I click on Samsung Phone
        # Then I check samsung product description
        Then the product should be added to the cart
        Then I add the product to the cart
        Then the product should be added to the cart
       
        
        
        


        # Given I open url "https://www.demoblaze.com"
        # When I click on element with selector "#tbodyid > div:nth-child(1) > div > div > h4 > a"
        # When I click on element with selector "#tbodyid > div.row > div > a"




    # @demo @myroslav
    # Scenario: Place an Order
    #     Given I navigate to the Demoblaze homepage
    #     When I click a product "Samsung galaxy s6"
    #     When I add the product to the cart
        When I click on the Cart button
        Then I check Products label
        Then I check Total label
        Then I check price 360 label
        Then I check Pic label
        Then I check Title label
        Then I check Price label
        Then I check x label
        Then  I click the Place Order Button
        Then I fill out the Place Order Field
        Then I should see an order confirmation
        Then  I click OK button


        # Given I open url "https://www.demoblaze.com"
        # When I click on element with selector "#tbodyid > div:nth-child(1) > div > div > h4 > a"
        # When I click on element with selector "#tbodyid > div.row > div > a"
        # When I click on element with selector "#cartur"
        # When I click on element with selector "#page-wrapper > div > div.col-lg-1 > button"
        # When I type "billyjoebob" into element with selector "#name"
        # When I type "USA" into element with selector "#country"
        # When I type "Sacramento" into element with selector "#city"
        # When I type "4111111111111111" into element with selector "#card"
        # When I type "03" into element with selector "#month"
        # When I type "2028" into element with selector "#year"
        # When I click on element with selector "#orderModal > div > div > div.modal-footer > button.btn.btn-primary"
        # Then element with selector "body > div.sweet-alert.showSweetAlert.visible > h2" should contain text "Thank you for your purchase!"
        # Then I click on element with selector ".confirm"






