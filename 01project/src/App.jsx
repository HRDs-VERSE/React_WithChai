import { useState } from 'react'
import './App.css'

function App() {
  
  let [value, setValue] = useState(0)
  
  let  startAdd = () =>{
    if (value < 20){
      setValue(value + 1)
  }}

  let reduceAdd = () =>{
    if (value > 0){
      setValue(value - 1)
  }else{
    setValue("Can't go beyond 0")
    setTimeout(()=>{
      setValue(value)
    },2000)
  }
}

  return (
    <>
     <h1>DIHAZD</h1>
     <h2>Added Value : {value}</h2>
     <button onClick={startAdd}>Add</button>
     <br />
     <button onClick={reduceAdd}>Reduce</button>
    </>
  )
}

export default App
