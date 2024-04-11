const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = "5809683539:AAFPpN4HUYDN5X_iln8c_dm4zlDYCUdtUjg";

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json())
app.use(cors())

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userId = msg.from.id;
    const keyboardOptions = {
        resize_keyboard: true, // Уменьшаем размер клавиатуры
        one_time_keyboard: true // Клавиатура исчезнет после использования
    };

    if (text === "/start") {
        await // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, `Ниже появится кнопка "Play"\n Ваш telegram_id = ${userId}`, {
                reply_markup: {
                    keyboard: [
                        [{
                            text: 'Play',
                            resize_keyboard: true,
                            one_time_keyboard: true
                        }]
                    ]
                }
            });
    }
    if (text) {
        await
            bot.send
    }
});

app.get('/web-data', (req, res) => {
    const {queryId, products, totalPrice} = req.body;
    console.log('queryId', queryId)
})

const PORT = "8080";

app.listen(PORT, () => {
    console.log('server started on PORT ' + PORT)
});
