
import React from 'react'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { Miner } from './components/Miner'
import { Paint } from './components/Paint'
import { Labirinth } from './components/Labirinth'
import { Users } from './components/Users'
import { User } from './components/User'
import { Score } from './components/Score'
import './App.css';

const userId = 1488565248;

function App() {
  // const [visability, setVisabiliti] =  React.useState(true);

  // const handleChangeVisability = () => {
  //   setVisabiliti(true)
  // }
  const [users, setUsers] = React.useState([]);
  const [oneUser, setOneUser] = React.useState([]);
  const [score, setScore] = React.useState(0)

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
  // React.useEffect(() => {
  //   fetch(`http://localhost:8080/api/user/${userId}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setOneUser(result)
  //     })
  //     .catch((err) => {
  //       console.warn(err)
  //       alert("Error fetching data")
  //     })
  // }, [])
  
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      {/* <Score score={score}/> */}
      <Miner coins={score} user={userId}/>
      {/* <Paint></Paint>
      <Labirinth></Labirinth> */}
      <Users items={users}></Users>
      <User item={oneUser}></User>
    </div>
  );
}

export default App;
