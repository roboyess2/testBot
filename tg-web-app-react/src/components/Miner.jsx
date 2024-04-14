// import React from 'react'
// import coin from '../static/coin.png'
// import '../components-styles/Miner.css'

// export const Miner = (score) => {
//     console.log('score', Number(score.score))
//     const [coins, setCoins] = React.useState(Number(score.score))
//     const updateScore = () => {
//         setCoins(Number(score.score) + 1)
//         console.log(coins)
//     }
//     return (
//         <div className="miner container">
//             <h2>Mine Coin</h2>
//             <button onClick={() => updateScore()}>
//                 <img className="main__current-game-coin" src={coin} alt="coin" />
//             </button>
//         </div>
//     )
// }