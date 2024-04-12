
import React from 'react'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { Miner } from './components/Miner'
import { Paint } from './components/Paint'
import { Labirinth } from './components/Labirinth'
import { Users } from './components/Users'
import './App.css';
import { User } from './components/User'

const userId = 1488565248;

function App() {
  // const [visability, setVisabiliti] =  React.useState(true);

  // const handleChangeVisability = () => {
  //   setVisabiliti(true)
  // }
  const [users, setUsers] = React.useState([]);
  const [oneUser, setOneUser] = React.useState([]);

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
  React.useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        setOneUser(result)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error fetching data")
      })
  }, [])
  
  return (
    <div className="App">
      <Header />
      <ProgressBar></ProgressBar>
      <Miner></Miner>
      <Paint></Paint>
      <Labirinth></Labirinth>
      <Users items={users}></Users>
      <User item={oneUser}></User>
    </div>
  );
}

export default App;
