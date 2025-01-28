import { config as baseConfig } from '../wdio.conf.js';
import csv_to_JSON from '../test/helper/csv_to_JSON.js';
import fs from 'fs';

export const config = Object.assign(baseConfig, {
  OrangeHRMBaseUrl: 'http://localhost/orangehrm/web/index.php',
});
