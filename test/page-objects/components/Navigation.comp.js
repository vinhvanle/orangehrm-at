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
  get timeModuleButton() {
    return $(`a[href='/orangehrm/web/index.php/time/viewTimeModule']`);
  }

  async navigateToModule(module) {
    module = module.toUpperCase();
    switch (module) {
      case 'LEAVE':
        await this.click(this.leaveModuleButton);
        break;
      case 'TIME':
        await this.click(this.timeModuleButton);
        break;
    }
  }
}

export default new Navigation();
