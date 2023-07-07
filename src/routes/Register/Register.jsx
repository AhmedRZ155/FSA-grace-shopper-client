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

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setUser } = useOutletContext();
>>>>>>> d50c5f9ae04811e498b710fc285adeff3fca7d18
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
            email,
            name,
            password,
          }),
        },
      )

      const result = await response.json()
      console.log(result)
      setToken(result.data.token)
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
>>>>>>> d50c5f9ae04811e498b710fc285adeff3fca7d18
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1 className="registerHereTag">Register Here</h1>
      <form className="registerInputFields" onSubmit={registerUser}>
        <input
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          placeholder="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
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
