const BotModule = require('../bot-module');

function* countHi() {
  let count = 0;
  while (true) {
    yield count += 1;
  }
}

class SampleBotModule extends BotModule {
  constructor(...args) {
    super(...args);
    this.hiCounter = countHi();
  }

  initModule() {
    this.bot.hears('hi', (ctx, next) => {
      ctx.reply(`You said 'hi' ${this.hiCounter.next().value} times`);
      next();
    });

    this.bot.on('message', (ctx) => console.log(ctx));
  }
}

module.exports = SampleBotModule;
