import Page from './page';
import stringManipulation from '../helper/stringManipulation';
class Leave extends Page {
  constructor() {
    super();
  }

  get applyBodyNavButton() {
    return $(`a[text='Apply']`);
  }

  async clickBodyNavButton(buttonName) {
    buttonName = stringManipulation.capitalizeFirstLetter(buttonName);
    console.log(`>>>>> ${buttonName}`);
    const button = $(`a[text='${buttonName}']`);
    await this.click(button);
  }
}

export default new Leave();
