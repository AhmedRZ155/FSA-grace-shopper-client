<<<<<<< HEAD
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, setUser } = useOutletContext()
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setUser } = useOutletContext();
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
  const registerUser = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      setToken(result.data.token);
      setUser({
        name: result.data.name,
        email: result.data.email,
        type: result.data.type,
<<<<<<< HEAD
      })
      localStorage.setItem('token', result.data.token)
      navigate('/')
      toast.success('login!')
=======
      });
      localStorage.setItem('token', result.data.token);
      navigate('/');
      toast.success('login!');
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="registerForm">
      <h1 className='registerHereTag'>Register Here</h1>
      <form className='registerInputFields' onSubmit={registerUser}>
        <input
          placeholder='Email'
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          placeholder='Name'
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
<<<<<<< HEAD
        <button className="submitRegister" type="submit">
=======
        <img id="logoLogin" src="images/4.png" alt="Logo" />
        <button className='submitRegister' type='submit'>
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
          Register
        </button>
      </form>
      <p id="login-area">
        Already a user?{' '}
        <Link className='loginLink' to={'/login'}>
          Login
        </Link>
      </p>
    </div>
  );
}
