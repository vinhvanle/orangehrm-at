import { config as baseConfig } from '../wdio.conf.js';

export const config = Object.assign(baseConfig, {
  OrangeHRMBaseUrl: 'http://localhost/orangehrm/web/index.php',
});
