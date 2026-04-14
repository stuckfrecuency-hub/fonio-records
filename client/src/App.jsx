import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          {/* AQUÍ ESTÁ TU LOGO */}
          <img 
            src="/logotype.jpg" 
            className="base" 
            width="250" 
            alt="Fonio Records Logo" 
          />
        </div>
        <div>
          <h1>Fonio Records</h1>
          <p>
            Sello discográfico underground
          </p>
          <p>For demos:foniorecords@gmail.com
            
              Book an artist: foniorecords@gmail.com
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Interacciones: {count}
        </button>
      </section>
    </>
  )
}

export default App
