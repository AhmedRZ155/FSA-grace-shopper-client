import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useOutletContext } from 'react-router-dom'
export default function Register() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, token } = useOutletContext()
  const registerUser = async (ev) => {
    ev.preventDefault()
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            name: 'jeffery',
            password: password,
          }),
        },
      )

      const result = await response.json()
      console.log(result)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  return (
    <div>
      <h1 className="registerHereTag">Register Here</h1>
      <form className="registerInputFields" onSubmit={registerUser}>
        <input
          placeholder="username"
          value={registerUsername}
          onChange={(ev) => setRegisterUsername(ev.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={registerPassword}
          onChange={(ev) => setRegisterPassword(ev.target.value)}
        />
        <button onClick={registerUser} className="submitRegister" type="submit">
          Register
        </button>
      </form>
      <p>
        Already a user?{' '}
        <Link className="loginLink" to={'/login'}>
          Login
        </Link>
      </p>
    </div>
  )
}
