const BotModule = require('../bot-module');

class SampleBotModule extends BotModule {
  initModule() {
    this.bot.hears('hi', (ctx) => {
      return ctx.reply('Hi!');
    });
  }
}

module.exports = SampleBotModule;
