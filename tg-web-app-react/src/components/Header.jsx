import React from 'react'
import './Header.css'

export const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const handleClick = () => {
        console.log('click')
    }

    const handleShowMenu = () => {
        if (menuOpen === false) {
            setMenuOpen(true)
        } else {
            setMenuOpen(false)
        }
    }

    return (
        <header className="header">
            <div className="header__wrp container">
                <h1>Crypto app</h1>
                <button onClick={() => handleShowMenu()}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <nav className={`header__nav ${menuOpen ? 'active' : ''}`}>
                    <h2 className="header__nav-title">Menu</h2>
                    <ul className="header__nav-list">
                        <div className="header__games-wrp">
                            <h2>Mine Coin</h2>
                            <button onClick={() => handleClick()}>Play</button>
                        </div>
                        <div className="header__games-wrp">
                            <h2>Paint</h2>
                            <button onClick={() => handleClick()}>Play</button>
                        </div>
                        <div className="header__games-wrp">
                            <h2>Labirinth</h2>
                            <button onClick={() => handleClick()}>Play</button>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}