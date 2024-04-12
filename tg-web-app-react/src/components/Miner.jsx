import coin from '../static/coin.png'
import './Miner.css'

export const Miner = (coins, user) => {
    const updateScore = () => {
        coins++
        React.useEffect(() => {
            fetch(`http://localhost:8080/api/user/${user}`)
        })
    }
    return (
        <div class="miner container">
            <h2>Mine Coin</h2>
            <button>
                <img className="main__current-game-coin" src={coin} alt="coin" />
            </button>
        </div>
    )
}