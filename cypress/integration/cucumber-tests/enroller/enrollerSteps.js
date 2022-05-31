import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I am at the Login page', () => {
  LoginPage.visit()
  Navbar.clickSignIn()
  Navbar.clickAcceptCookies();
})



