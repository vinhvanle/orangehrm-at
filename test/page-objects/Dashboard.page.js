import Page from './page';

class Dashboard extends Page {
  constructor() {
    super();
  }

  get userDropdown() {
    return $(`li[class='oxd-userdropdown']`);
  }

  get logOutButton() {
    return $(`a[href="/orangehrm/web/index.php/auth/logout"`);
  }

  async clickUserDropdown() {
    await this.click(this.userDropdown);
  }

  async clickLogOutButton() {
    await this.click(this.logOutButton);
  }
}

export default new Dashboard();
