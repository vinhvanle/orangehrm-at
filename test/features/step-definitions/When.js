import { When } from '@wdio/cucumber-framework';
import LoginPage from '../../page-objects/Login.page';
import Dashboard from '../../page-objects/Dashboard.page';
import Leave from '../../page-objects/Leave.page';
import Navigation from '../../page-objects/components/Navigation.comp';
import reporter from '../../helper/reporter';
import { expect, should, assert } from 'chai';
import constants from '../../../data/constants' assert { type: 'json' };

/**
 * Section for Authentication Feature
 */

When(
  /^the user enters (valid|invalid|empty) username and password$/,
  async function (validity) {
    if (!validity) {
      throw new Error(`Given validity: ${validity} is not valid`);
    }
    reporter.addStep(
      this.testID,
      'info',
      `Starting to fill in with valid credentials`
    );
    try {
      // Fill in the username

      await LoginPage.fillUsername(
        constants.LOGIN_PAGE.credentials[`${validity.toUpperCase()}_USERNAME`]
      );
      const username = await LoginPage.usernameInput.getValue();
      expect(username).to.equal(
        constants.LOGIN_PAGE.credentials[`${validity.toUpperCase()}_USERNAME`]
      );
      // Fill in the password
      await LoginPage.fillPassword(
        constants.LOGIN_PAGE.credentials[`${validity.toUpperCase()}_PASSWORD`]
      );
      const password = await LoginPage.passwordInput.getValue();
      expect(password).to.equal(
        constants.LOGIN_PAGE.credentials[`${validity.toUpperCase()}_PASSWORD`]
      );
    } catch (error) {
      error.message = `Error logging in with ${validity} credentials: ${error.message}`;
      throw error;
    }
  }
);

When(/^the user clicks on the login button$/, async function () {
  reporter.addStep(
    this.testID,
    'info',
    `Starting to click on the login button`
  );
  try {
    await LoginPage.clickLoginButton();
  } catch (error) {
    error.message = `Error clicking on the login button: ${error.message}`;
    throw error;
  }
});

When(/^the user clicks on the logout button$/, async function () {
  reporter.addStep(
    this.testID,
    'info',
    `Starting to click on the logout button`
  );
  try {
    await Dashboard.clickUserDropdown();
    await Dashboard.clickLogOutButton();
  } catch (error) {
    error.message = `Error clicking on the logout button: ${error.message}`;
    throw error;
  }
});

/**
 * SECTION END
 */

/**
 * Leave Feature section
 */
When(
  /^I navigate to the (.*) page through navigation$/,
  async function (pageTitle) {
    if (!pageTitle) {
      throw new Error(`Given page title: ${pageTitle} is not valid`);
    }
    reporter.addStep(
      this.testID,
      'info',
      `Starting to navigate to the ${pageTitle} page`
    );
    try {
      await Navigation.navigateToModule(pageTitle);
      const currentPageUrl = await browser.getUrl();
      expect(currentPageUrl).to.contain(pageTitle);
    } catch (error) {
      error.message = `Error navigating to the ${pageTitle} page: ${error.message}`;
      throw error;
    }
  }
);

When(/^I click the "(.*)" button$/, async function (buttonName) {
  if (!buttonName) {
    throw new Error(`Button name is not provided`);
  }
  reporter.addStep(
    this.testID,
    'info',
    `Starting to click on the ${buttonName} button`
  );
  try {
    await Leave.clickBodyNavButton(buttonName);
  } catch (error) {
    error.message = `Error clicking on the ${buttonName} button: ${error.message}`;
    throw error;
  }
});

/**
 * END SECTION
 */
