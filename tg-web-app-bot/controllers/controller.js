const TelegramBot = require('node-telegram-bot-api');
const pool = require('../DBcontext');



class UserController {
    async getCoinsByTelegramId(telegramId) {
        try {
            const query = 'SELECT coins FROM "user" WHERE telegram_id = $1';
            const values = [telegramId];
            const result = await pool.query(query, values);
            return result.rows[0].coins;
        } catch (error) {
            console.error('Error retrieving coins:', error);
            return null;
        }
    }

    async updateCoinsByTelegramId(telegramId, newCoins) {
        try {
            const query = 'UPDATE "user" SET coins = $1 WHERE telegram_id = $2';
            const values = [newCoins, telegramId];
            await pool.query(query, values);
            return true;
        } catch (error) {
            console.error('Error updating coins:', error);
            return false;
        }
    }

    async Coinstatus(req, res) {
        const { telegram_id: telegramId } = req.body;
        const coins = await this.getCoinsByTelegramId(telegramId);
        if (coins !== null) {
            res.json({ coins });
        } else {
            res.status(500).json({ error: 'Failed to retrieve coins' });
        }
    }

    async start(msg) {
        const userId = msg.from.id;
        const username = msg.from.username;
        try {
            const query = `INSERT INTO "user" (telegram_id, user_name) VALUES (${userId}, '${username}') ON CONFLICT DO NOTHING`;
            await pool.query(query);
            console.log('User info saved to database');
        } catch (error) {
            console.error('Error saving user info to database:', error);
        }
    }
}


module.exports = new UserController()