const Telegraf = require('telegraf');

class BotModuleManager {
  
  constructor(token) {
    this.botModules = [];
    this.bot = new Telegraf(token);
    this.bot.startPolling();
  }

  registerBotModule(BotModule) {
    this.botModules.push(new BotModule(this.bot));
  }
}

module.exports = BotModuleManager;
