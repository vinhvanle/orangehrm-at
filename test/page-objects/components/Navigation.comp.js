import stringManipulation from '../../helper/stringManipulation';
import Page from '../page';

class Navigation extends Page {
  constructor() {
    super();
  }

  get navBar() {
    return $(`nav`);
  }

  get brand() {
    return $(`a[class='oxd-brand']`);
  }

  get searchInput() {
    return $(`input[class*='oxd-input]`);
  }

  get leaveModuleButton() {
    return $(`a[href='/orangehrm/web/index.php/leave/viewLeaveModule']`);
  }

  async navigateToModule(module) {
    module = stringManipulation.capitalizeFirstLetter(module);
    const target = await $(
      `//a[@href='/orangehrm/web/index.php/${module.toLowerCase()}/view${module}Module']`
    );

    await this.click(target);
  }
}

export default new Navigation();
