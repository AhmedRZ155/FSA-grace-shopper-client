import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export default function Register() {
  const register = async (ev) => {
    ev.preventDefault()
    try {
      console.log("You're registered")
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
      <form className="registerInputFields" onSubmit={register}>
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
        <button className="submitRegister" type="submit">
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
