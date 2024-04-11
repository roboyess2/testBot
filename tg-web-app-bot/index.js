const TelegramBot = require('node-telegram-bot-api');

const token = "5809683539:AAFPpN4HUYDN5X_iln8c_dm4zlDYCUdtUjg";

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
        await // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Ниже появится кнопка "Play"', {
            reply_markup: {
                keyboard: [
                    [{text: 'Play'}]
                ]
            }
            
        });
  }

    
});

