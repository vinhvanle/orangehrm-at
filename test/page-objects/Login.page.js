import Page from './page';
/**
 * Represents the login page.
 * @extends Page
 */
class LoginPage extends Page {
  constructor() {
    super();
  }
  /**
   * Gets the username input element.
   * @returns {Element} The username input element.
   */
  get usernameInput() {
    // ...
    return $(`input[name='username']`);
  }

  /**
   * Gets the password input element.
   * @returns {Element} The password input element.
   */
  get passwordInput() {
    // ...
    return $(`input[name='password']`);
  }

  /**
   * Gets the login button element.
   * @returns {Element} The login button element.
   */
  get loginButton() {
    // ...
    return $(`button[type='submit']`);
  }

  get loginError() {
    // ...
    return $(`div[class='orangehrm-login-error']`);
  }

  get loginErrorMessage() {
    // ...
    return $(`p[class='oxd-text oxd-text--p oxd-alert-content-text']`);
  }

  get requiredFieldsError() {
    // ...
    return $(`span[class*='oxd-input-field-error-message']`);
  }

  async fillUsername(username) {
    // ...
    await this.typeInto(this.usernameInput, username);
  }

  async fillPassword(password) {
    // ...
    await this.typeInto(this.passwordInput, password);
  }

  async clickLoginButton() {
    // ...
    await this.click(this.loginButton);
  }

  async login(username, password) {
    try {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLoginButton();
    } catch (err) {
      err.message = `Error while trying to login: ${err.message}`;
      throw err;
    }
  }
}

export default new LoginPage();
