const BotModuleManager = require('./bot-module-manager');

var envConfigs = require('./environment-config.json');
var config = envConfigs.development;
if (process.env.NODE_ENV) {
  config = envConfigs[process.env.NODE_ENV] || envConfigs['development'];
}

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));

const botModuleManager = new BotModuleManager(config.token);
const SampleBotModule = require('./bot-modules/sample-bot-module');
botModuleManager.registerBotModule(SampleBotModule);
