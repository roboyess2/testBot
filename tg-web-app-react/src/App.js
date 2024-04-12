
import React from 'react'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { Miner } from './components/Miner'
import { Paint } from './components/Paint'
import { Labirinth } from './components/Labirinth'
import { Users } from './components/Users'
import './App.css';

function App() {
  // const [visability, setVisabiliti] =  React.useState(true);

  // const handleChangeVisability = () => {
  //   setVisabiliti(true)
  // }
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((res) => res.json())
      .then((result) => {
        setUsers(result)
        console.log("users", result)
      })
      .catch((err) => {
        console.warn(err)
        alert("Error fetching users")
      })

  }, [])
  return (
    <div className="App">
      <Header></Header>
      <ProgressBar></ProgressBar>
      <Miner></Miner>
      <Paint></Paint>
      <Labirinth></Labirinth>
      <Users items={users}></Users>
    </div>
  );
}

export default App;
