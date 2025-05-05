const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN); // use env variable

bot.start((ctx) => {
  ctx.reply('Welcome! Click below to open the Mini App.', {
    reply_markup: {
      inline_keyboard: [[{
        text: 'Open Mini App',
        web_app: {
          url: 'https://rinrady.github.io/khb_reward/'
        }
      }]]
    }
  });
});

bot.launch();
console.log("Bot running...");
