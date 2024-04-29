import React from 'react'
import coin from '../static/coin.png'
import '../components-styles/Score.css'
import { Miner } from './Miner'
import '../components-styles/Miner.css'


export const Score = ({ coins, user_id }) => {
    const [score, setScore] = React.useState(coins)
    console.log(user_id)

    React.useEffect(() => {
        fetch('http://localhost:8080/api/user', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ telegram_id: 1488565248, coins: 800 })
        })
        setScore(coins)
        console.log('coins', coins)
    })

    async function handlePlusCoin() {
        setScore(score + 1)

        await fetch('http://localhost:8080/api/user', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ telegram_id: 1488565248, coins: score })
        })
    }


    return (
        <section className="main__current-game container">
            <div className="main__current-game-wrp">
                <h2>Game</h2>
                <div className="main__current-coin-total">
                    <h2>Score: {score}</h2>
                    <img className="main__current-coin" src={coin} alt="coin" />
                </div>
            </div>
            <div className="miner container">
                <h2>Mine Coin</h2>
                <button className="main__current-game-coin" onClick={() => handlePlusCoin()}>
                    <img className="main__current-game-coin" src={coin} alt="coin" />
                </button>
            </div>
        </section>
    )
}