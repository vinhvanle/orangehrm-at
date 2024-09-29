import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../../page-objects/Login.page';
import reporter from '../../helper/reporter';
import { expect, should, assert } from 'chai';
import constants from '../../../data/constants' assert { type: 'json' };
/**
 * Authentication Feature section
 */
Given(/^the user is on the (.*) page$/, async function (pageTitle) {
  if (!pageTitle) {
    throw new Error(`Given pageTitle: ${pageTitle} is not valid`);
  }
  reporter.addStep(
    this.testID,
    'info',
    `Starting to navigate to the ${pageTitle} page`
  );
  try {
    await LoginPage.navigateTo(
      `${browser.options.OrangeHRMBaseUrl}/${
        constants[`${pageTitle.toUpperCase()}_PAGE`].path
      }`
    );
    let browserUrl = await browser.getUrl();
    expect(browserUrl).to.contain(browser.options.OrangeHRMBaseUrl);
  } catch (error) {
    error.message = `Error navigating to the ${pageTitle} page: ${error.message}`;
    throw error;
  }
});
/**
 * END SECTION
 */

/**
 * Leave Feature section
 */

Given(/^I am logged in as an (.*) user$/, async function (role) {
  if (!role) {
    throw new Error(`Given role: ${role} is not valid`);
  }
  reporter.addStep(this.testID, 'info', `Starting to log in as ${role} user`);
  try {
    await LoginPage.navigateTo(
      `${browser.options.OrangeHRMBaseUrl}/${constants.LOGIN_PAGE.path}`
    );

    await LoginPage.fillUsername(
      constants.LOGIN_PAGE.credentials[`${role.toUpperCase()}_USERNAME`]
    );
    await LoginPage.fillPassword(
      constants.LOGIN_PAGE.credentials[`${role.toUpperCase()}_PASSWORD`]
    );
    await LoginPage.clickLoginButton();
  } catch (error) {
    error.message = `Error logging in as an ${role} user: ${error.message}`;
    throw error;
  }
});

/**
 * END SECTION
 */
