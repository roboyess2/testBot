import asyncio
from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message
from aiogram import types
from aiogram.utils.keyboard import ReplyKeyboardBuilder
from aiogram import F
import json


secrets_filename = 'secret.json'
api_keys = {}
with open(secrets_filename, 'r') as file:
    api_keys = json.load(file)
BOT_TOKEN = api_keys['Quadro_SECRET']


bot = Bot(BOT_TOKEN)
dp = Dispatcher()


@dp.message(Command("start"))
async def process_start_command(message: types.Message):
    kb = [
        [types.KeyboardButton(text="Play")],
    ]
    keyboard = types.ReplyKeyboardMarkup(
        keyboard=kb,
        resize_keyboard=True,
        )
    await message.answer('Данный проект ... нажмите чтобы играть',reply_markup=keyboard)

@dp.message(Command("help"))
async def help_command(message: Message):
    await message.answer('Здесь что-то будет возможно')

@dp.message(F.text)
async def repeater(message : Message):
    if message.text == "Пошел нахуй".lower():
        await message.answer("Сам пошел нахуй")
    else:
        await message.answer(message.text)



if __name__ == '__main__':
    dp.run_polling(bot)