import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Parcial Walter Aldana</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Si estás aburrido presiona acá {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
