import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive');

setColor

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button className='outline-none px-4 py-1 rounded-full text-black shadow border-2 border-lime-700 bg-lime-500' onClick={()=>setColor('olive')}>olive</button>
              <button className='outline-none px-4 py-1 rounded-full text-black shadow border-2 border-red-700 bg-red-300' onClick={()=>setColor('red')}>red</button>
              <button className='outline-none px-4 py-1 rounded-full text-black shadow border-2 border-purple-700 bg-purple-300' onClick={()=>setColor('purple')}>purple</button>
              <button className='outline-none px-4 py-1 rounded-full text-black shadow border-2 border-orange-700 bg-orange-300' onClick={()=>setColor('orange')}>orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
