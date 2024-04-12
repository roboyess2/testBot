import coin from '../static/coin.png'

export const Score = (coins) => {

    return (
        <section className="main__current-game container">
            <div className="main__current-game-wrp">
                <h2>Game</h2>
                <div className="main__current-coin-total">
                    <h2>Score: {coins}</h2>
                    <img className="main__current-coin" src={coin} alt="coin" />
                </div>
            </div>
        </section>
    )
}