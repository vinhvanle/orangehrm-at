class Page {
  constructor() {}
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async navigateTo(path) {
    await browser.url(path);
    await browser.maximizeWindow();
  }

  /**
   * Click an element on the page
   * @param {WebdriverIO.Element} ele the webdriverIO element to click
   */
  async click(ele) {
    await ele.waitForClickable({ timeout: 30000, interval: 500 });
    // if (!ele.elementId) {
    //   throw Error(ele.error.message);
    // }
    await ele.click();
  }

  /**
   * Type into a WebdriverIO element
   * @param {WebdriverIO.Element} ele the webdriverIO element to click
   * @param {string} text the text to be typed into
   */
  async typeInto(ele, text) {
    await ele.waitForDisplayed({ timeout: 30000, interval: 500 });
    await ele.click();
    if (!ele.elementId) {
      throw Error(ele.error.message);
    }
    await ele.setValue(text);
  }
}

export default Page;
