import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <h1 className="text-5xl text-teal-300 bg-blue-500 rounded-2xl px-6 p-3 py-2 hover:bg-teal-950 hover:text-white">Mustafa Cenan</h1>
        <Card/>
      </>
  )
}

export default App
