import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
import Navbar from '../../../page-objects/components/Navbar'
import EndPage from '../../../page-objects/pages/EndPage'

Given('I open login page', () => {
  LoginPage.visit()
  Navbar.clickSignIn()
  Navbar.clickAcceptCookies();
})

When('I fill username with {string}', username => {
  LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password)
})

When('I click on sign in', () => {
  LoginPage.clickSignIn()
})

Then('I should be at the home page', () => {
  Navbar.welComeHomePage();
})

And('I logout', () => {
  Navbar.logout()
  EndPage.seeLogoutText()
})


