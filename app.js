const BotModuleManager = require('./bot-module-manager');

var envConfigs = require('./environment-config.json');
var config = envConfigs.development;
if (process.env.NODE_ENV) {
  config = envConfigs[process.env.NODE_ENV] || envConfigs['development'];
}

const botModuleManager = new BotModuleManager(config.token);

const BotModule = require('./bot-module');
botModuleManager.registerBotModule(BotModule);
