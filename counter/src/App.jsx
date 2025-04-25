import "./App.css"
import { useState } from "react"

function App() {
  const [counter,setCounter] = useState(15)

  const increase = ()=>{
    setCounter(counter+1)
}

  const decrease = () => {
  setCounter(counter-1)
}

  return (
    <>
      <div>Hello {counter}</div>
      <h2>Current count is: {counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <footer>All rights reserved in bla bla :P {counter} </footer>
    </>
  )
}

export default App
