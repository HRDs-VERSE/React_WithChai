import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let username = 'HRD'
  return (
    <>
      <h1 className='bg-black rounded-xl mb-4 '>DIHAZD</h1>
      <Card username = {username} />
    </>
  )
}

export default App
