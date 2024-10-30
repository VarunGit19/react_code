import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-slate-800 px-3 py-2 rounded-3xl">

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}>
              Red
            </button>

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "Yellow"}}
            onClick={() => setColor("Yellow")}>
              Yellow
            </button>

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "Green"}}
            onClick={() => setColor("Green")}>
              Green
            </button>

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "Purple", color: "white"}}
            onClick={() => setColor("Purple")}>
              Purple
            </button>

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "Pink"}}
            onClick={() => setColor("Pink")}>
              Pink
            </button>

            <button
            className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor: "Black", color:"white"}}
            onClick={() => setColor("Black")}>
              Black
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
