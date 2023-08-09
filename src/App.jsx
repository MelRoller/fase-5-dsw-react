import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>        
          <img src={viteLogo} className="logo" alt="Vite logo" />
               
          <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>
      <h1>Fase 5 Diseño Web</h1>
      <h1>UNAD</h1>
      <h2>Creado por: Melwin Rubio Banoy</h2>
      <p className="read-the-docs">
        ⬇⬇Dale click en el boton para ir a la pagina inicio⬇⬇
      </p>
      <div className="card">
        <button type="button">
          <a href="../principal.html">Inicio</a>
        </button>        
      </div>
      <p className="read-the-docs">
        ↑↑Dale click en el boton para ir a la pagina inicio↑↑
      </p>
      <p className="read-the-docs">
        Renderizado con Vita y Reack para la FASE 5 de diseño Web UNAD
      </p>
    </>
  )
}

export default App
