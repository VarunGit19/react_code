import { useState } from 'react'

function App() {
  // let counter = 15

  let [counter, setCounter] = useState(0)  

  function addValue(){
    counter = counter + 1
    if (counter > 20) {
      counter = 20
      setCounter(counter)
    }
    else{
      setCounter(counter)
    }
  }

  function removeValue(){
    counter = counter - 1
    if (counter < 0) {
      counter = 0
      setCounter(counter)
    }
    else{
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <br />
      <p>footer: {counter}</p>
    </>
  )
}

export default App
