import { When } from '@wdio/cucumber-framework';
import reporter from '../../helper/reporter';
import Page from '../../page-objects/page';
import LoginPage from '../../page-objects/Login.page';

When(/^I login as "(.*)" user$/, async function (user) {
  reporter.addStep(this.testID, 'info', `Starting to login as ${user} user`);
  let username = process.env[`${user.toUpperCase()}_USERNAME`];
  let password = process.env[`${user.toUpperCase()}_PASSWORD`];
  await LoginPage.login(username, password);
});
