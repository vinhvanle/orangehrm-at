import { Given } from '@wdio/cucumber-framework';
import reporter from '../../helper/reporter';
import Page from '../../page-objects/page';
import LoginPage from '../../page-objects/Login.page';

Given(/^I navigate to the leave management system$/, async function () {
  reporter.addStep(
    this.testID,
    'info',
    `Starting to navigate to the leave management system`
  );
  await browser.url(browser.options.OrangeHRMBaseUrl);
});
