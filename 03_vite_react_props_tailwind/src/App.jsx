import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>

      <Card username="chai_aur_code" btnText="Click Me"/>
      <Card username="Varun" btnText='Hello'/>
    </>
  )
}

export default App
