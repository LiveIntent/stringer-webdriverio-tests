import { Given, When, Then } from '@cucumber/cucumber'


import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

const pages = {
    login: LoginPage
}

Given('I am in the {string} page', async (page) => {
    await pages[page].open()
});

When('I login to application as admin', async () => {
    await LoginPage.login(process.env.ADMIN_USER, process.env.ADMIN_PASSWORD)
});

Then('I should see the landingPage', async () => {
    await expect(HomePage.homeLogo).toBeExisting();
});

