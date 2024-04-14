import React from 'react'
import coin from '../static/coin.png'
import '../components-styles/Score.css'
import { Miner } from './Miner'
import '../components-styles/Miner.css'


export const Score = ({ coins, userId }) => {
    console.log("coins", coins)
    console.log('telegram_id', userId)
    const [score, setScore] = React.useState(coins)
    console.log(score)
    const updateScore = () => {
        setScore(score + 1)
        console.log(score)
    }
    React.useEffect(() => {
        const userData = {
            telegram_id: userId,
            score: score
        };
    
        // Опции запроса
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
    
        // Выполнение запроса
        fetch('http://localhost:8080/api/user', requestOptions)
            .then(response => {
                // Обработка ответа
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json();
            })
            .then(data => {
                // Обработка данных
                console.log('Данные успешно обновлены:', data);
            })
            .catch(error => {
                // Обработка ошибок
                console.error('Произошла ошибка:', error);
            });
    }, []);
    return (
        <section className="main__current-game container">
            <div className="main__current-game-wrp">
                <h2>Game</h2>
                <div className="main__current-coin-total">
                    <h2>Score: { score }</h2>
                    <img className="main__current-coin" src={coin} alt="coin" />
                </div>
            </div>
                <div className="miner container">
                    <h2>Mine Coin</h2>
                    <button onClick={() => updateScore()}>
                        <img className="main__current-game-coin" src={coin} alt="coin" />
                    </button>
                </div>
        </section>
    )
}