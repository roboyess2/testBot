import React from 'react'
import './Header.css'

export const Header = () => {
    const menuVisible = false;
    const handleClick = () => {
        console.log('click')
    }

    const handleShowMenu = () => {
        console.log('ok')
    }

    return (
        <header className="header">
        <div className="header__wrp container">
            <h1>Crypto app {menuVisible}</h1>
            
            <button onCLick={() => handleShowMenu()}>
                <i className="fa-solid fa-bars"></i>
                </button>
            <nav className="header__nav">
                <h2 className="header__nav-title">Menu</h2>
                <ul className="header__nav-list">
                    <div className="header__games-wrp">
                        <h2>Mine Coin</h2>
                        <button id="miner" onClick={() => handleClick()}>Play</button>
                    </div>
                    <div className="header__games-wrp">
                        <h2>Paint</h2>
                        <button id="paint" onClick={() => handleClick()}>Play</button>
                    </div>
                    <div className="header__games-wrp">
                        <h2>Labirinth</h2>
                        <button id="labirinth" onClick={() => handleClick()}>Play</button>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
    )
}