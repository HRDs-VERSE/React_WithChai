import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const {setUser} = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" placeholder='Username' />
            {' '}
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text" placeholder='Password' />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login
