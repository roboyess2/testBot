
import React from 'react'
import {Header} from './components/Header'
import {ProgressBar} from './components/ProgressBar'
import {Miner} from './components/Miner'
import {Paint} from './components/Paint'
import {Labirinth} from './components/Labirinth'
import './App.css';

function App() {
  const [visability, setVisabiliti] =  React.useState(true);

  const handleChangeVisability = () => {
    setVisabiliti(true)
  }
  return (
    <div className="App">
      <Header></Header>
      <ProgressBar></ProgressBar>
      <Miner></Miner>
      <Paint></Paint>
      <Labirinth></Labirinth>
    </div>
  );
}

export default App;
