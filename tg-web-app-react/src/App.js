
import React from 'react'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { Paint } from './components/Paint'
import { Labirinth } from './components/Labirinth'
import { Users } from './components/Users'
import { User } from './components/User'
import { Score } from './components/Score'
import { Options } from './components/Options'
import './App.css';

let tg = window.Telegram.WebApp;
const userId = 1488565248; //tg.initDataUnsafe.user.id

function App() {
  const [oneUser, setOneUser] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [coins] = React.useState(oneUser.coins)

  // Один юзер
  React.useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        setOneUser(result)
      })
      .catch((err) => {
        console.warn(err)
        alert(`Error fetching User:${userId}`)
      })
  }, [])

  // Все юзеры 
  React.useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((res) => res.json())
      .then((result) => {
        setUsers(result)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error fetching users")
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <ProgressBar />

      <Score coins={oneUser.coins} telegram_id={userId} />

      <br></br>
      {/* <Paint></Paint>
      <Labirinth></Labirinth> */}
      <Users items={users}></Users>
      {/* <User item={oneUser}></User> */}
      <Options></Options>
    </div>
  );
}

export default App;
