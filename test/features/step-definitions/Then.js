import { Then } from '@wdio/cucumber-framework';
import LoginPage from '../../page-objects/Login.page';
import reporter from '../../helper/reporter';
import { expect, should, assert } from 'chai';
import constants from '../../../data/constants' assert { type: 'json' };

/**
 * Section for Authentication Feature
 */
Then(
  /^the user should be redirected to the (.*) page$/,
  async function (pageTitle) {
    if (!pageTitle) {
      throw new Error(`Given pageTitle: ${pageTitle} is not valid`);
    }
    reporter.addStep(
      this.testID,
      'info',
      `Starting to verify the user is redirected to the ${pageTitle} page`
    );
    try {
      //Wait for the user to be redirected to the page
      await browser.waitUntil(
        async () => {
          return (await browser.getUrl()).includes(pageTitle);
        },
        {
          timeout: 10000,
          timeoutMsg: `User was not redirected to the ${pageTitle} page`,
        }
      );
    } catch (error) {
      error.message = `Error verifying the user is redirected to the ${pageTitle} page: ${error.message}`;
      throw error;
    }
  }
);

Then(/^the user should see an error message$/, async function () {
  reporter.addStep(
    this.testID,
    'info',
    `Starting to verify the user sees an error message`
  );
  try {
    //Wait for the error message to be displayed
    await browser.waitUntil(
      async () => {
        return await LoginPage.loginError.isDisplayed();
      },
      {
        timeout: 10000,
        timeoutMsg: 'Error message was not displayed',
      }
    );
    //Validate the error message
    const errorMessage = await LoginPage.loginErrorMessage.getText();
    expect(errorMessage).to.equal('Invalid credentials');
  } catch (error) {
    error.message = `Error verifying the user sees an error message: ${error.message}`;
    throw error;
  }
});

Then(/^the user should see required fields error$/, async function () {
  reporter.addStep(
    this.testID,
    'info',
    `Starting to verify the user sees required fields error`
  );
  try {
    //Wait for the error message to be displayed
    await browser.waitUntil(
      async () => {
        return await LoginPage.requiredFieldsError.isDisplayed();
      },
      {
        timeout: 10000,
        timeoutMsg: 'Error message was not displayed',
      }
    );
    //Validate the error message
    const errorMessage = await LoginPage.requiredFieldsError.getText();
    expect(errorMessage).to.equal('Required');
  } catch (error) {
    error.message = `Error verifying the user sees required fields error: ${error.message}`;
    throw error;
  }
});

/**
 * SECTION END
 */
