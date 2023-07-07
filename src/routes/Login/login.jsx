<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [email, setEmail] = '';
  const [password, setPassword] = '';
>>>>>>> d50c5f9ae04811e498b710fc285adeff3fca7d18

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, setUser } = useOutletContext()
  const navigate = useNavigate()

  const userLogin = async (ev) => {
    ev.preventDefault()
    console.log(email, password)
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
<<<<<<< HEAD
        const token = result.data.token
        setUser({
          name: result.data.name,
          email: result.data.email,
          type: result.data.type,
        })
        console.log(result)
        setToken(result.data.token)
        localStorage.setItem('token', result.data.token)
        navigate('/')
        toast.success('login!')
=======
        const token = result.data.token;
        localStorage.setItem('token', token);
        setUser(result.data.user);
        setToken(token);
        navigate('/home');
>>>>>>> d50c5f9ae04811e498b710fc285adeff3fca7d18
      }
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <h1 className="registerHereTag">Login</h1>
      <form className="loginInputFields">
        <input
          placeholder="username"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button onClick={userLogin} className="submitLogin" type="submit">
=======
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
>>>>>>> d50c5f9ae04811e498b710fc285adeff3fca7d18
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
