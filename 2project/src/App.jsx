import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pasward = ""
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) char += '0123456789'
    if (charAllowed) char += '~`!@#$%^&*()_-+=?/><'

    for (let i = 0; i < length; i++) {
       pasward += char[Math.floor(Math.random() * char.length)]
    }
    setPassword(pasward)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenrator()
  },[length, numAllowed, charAllowed, passwordGenrator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-white border-2 border-orange-500'>
        <h1 className='text-3xl text-center text-orange-500'>PASSWORD GENERATOR</h1>
        <div className=' flex rounded-lg overflow-hidden m-7 shadow-xl'>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 roundedl-l'
            placeholder='password'
            readOnly
            ref={passwordRef}
          
          />
          <button 
          onClick={copyPasToClipboard}
          className='roundedr-lg bg-white text-orange-500 pl-3 pr-3'>COPY</button>
        </div>

        <div className=' flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
              min={8}
              max={30}
              value={length}
              className='cursor-pointer accent-orange-500 '
              onChange={(e) => setLength(e.target.value)} />
            <label>Length {length}</label>
          </div>
          <div className=' flex item-center gap-x-1'>
            <input
              className='accent-orange-500'
              type="checkbox"
              defaultChecked={numAllowed}
              id='numAllowed'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }} />
            <label>Number's</label>
            <input 
              className='accent-orange-500 '
              type="checkbox"
              defaultChecked={charAllowed}
              id='charAllowed'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label>CHAR</label>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
