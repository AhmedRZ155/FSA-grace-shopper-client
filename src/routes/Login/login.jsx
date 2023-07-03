import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
export default function Login() {
  const register = async (ev) => {
    ev.preventDefault();
    try {
      console.log("You're Logged in!");
    } catch (err) {
      console.error(err);
    }
  };

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <div>
      <h1 className='registerHereTag'>Login</h1>
      <form className='loginInputFields' onSubmit={Login}>
        <input
          placeholder='username'
          value={loginUsername}
          onChange={(ev) => setLoginUsername(ev.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          value={loginPassword}
          onChange={(ev) => setLoginPassword(ev.target.value)}
        />
        <button className='submitLogin' type='submit'>
          Login
        </button>
      </form>
      <p>
        New here?{' '}
        <Link className='registerLink' to={'/register'}>
          Register
        </Link>
      </p>
    </div>
  );
}
