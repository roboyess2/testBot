const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes')
const { Client } = require('pg');
const UserController = require('./controllers/controller');

const secrets = require('./secret.json');
const { connect_to_database, execute_query } = require('./db');

const token = secrets.Quadro_SECRET;

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json())
app.use(cors())

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userId = msg.from.id;

    if (text === "/start") {

        await UserController.start(msg);


        await // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, `Ниже появится кнопка <a href="t.me/quadrotestbot/quadro">Play</a>\n Ваш telegram_id = ${userId}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Play',
                            url: 't.me/quadrotestbot/quadro'
                        }]
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true,

                },
                parse_mode: 'HTML'
            });
    }
    if (text) {
        await
            bot.send
    }
});


app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.send('NODEMON WORK')
})

const PORT = "8080";

app.listen(PORT, () => {
    console.log('server started on PORT ' + PORT)
});
