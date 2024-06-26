// import {bot} from './index.js';
const TelegramBot = require('node-telegram-bot-api');
const db = require('../db');

// const bot = new TelegramBot(token, { polling: true });


class UserController {

    async getUsers(req, res) {
        const users = await db.query('SELECT telegram_id, user_name, coins FROM "user"');
        console.log(users)
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT user_name, coins FROM "user" WHERE telegram_id = $1', [id]);
        res.json(user.rows[0])
    }

    async updateCoins(req, res) {
        // const {telegram_id, coins } = req.params.id
        const  {telegram_id, coins }  = req.body;
        const user = await db.query('update "user" set coins = $1 where telegram_id = $2 returning *', [coins, telegram_id]);
        res.json(user.rows[0])
    }

    async start(msg) {
        const userId = msg.from.id;
        const username = msg.from.username;
        try {
            const query = `INSERT INTO "user" (telegram_id, user_name) VALUES (${userId}, '${username}') ON CONFLICT DO NOTHING`;
            await db.query(query);
            console.log('User info saved to database');
        } catch (error) {
            console.error('Error saving user info to database:', error);
        }
    }
}

module.exports = new UserController()