import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 20
    }
    setCounter(counter)
    // console.log("Value added", counter);
  }

  const reduceValue = () => {
    counter = counter - 1;  
    if (counter < 0) {
      counter = 0
    }
    setCounter(counter)  
    // console.log("value reduced", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={reduceValue}>Remove value {counter} </button>
      <footer>footer count: {counter}</footer>
    </>
  )
}

export default App
