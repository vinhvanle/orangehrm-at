import { setWorldConstructor } from '@wdio/cucumber-framework';
import { expect, should, assert } from 'chai';

class CustomWorld {
  testID;
  temp;
  constructor() {
    this.testID = '';
  }
}

setWorldConstructor(CustomWorld);
