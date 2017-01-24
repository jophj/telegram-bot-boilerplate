const BotModule = require('../bot-module');
const Message = require('../models/message');

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

    this.bot.on('message', (ctx) => {
      var msg = new Message({
        id: ctx.update.message.message_id,
        date: new Date(ctx.update.message.date * 1000),
        text: ctx.update.message.text
      });

      msg.save(function(err) {
        if (err) throw err;
        console.log(`Message '${msg.text}' saved`);
      })
    });
  }
}

module.exports = SampleBotModule;
