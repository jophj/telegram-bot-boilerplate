var envConfigs = require('./environment-config.json');
var config = envConfigs.development;
if (process.env.NODE_ENV) {
  config = envConfigs[process.env.NODE_ENV] || envConfigs['development'];
}
