import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [email, setEmail] = '';
  const [password, setPassword] = '';

  const userLogin = async () => {
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
        const token = result.data.token;
        localStorage.setItem('token', token);
        setUser(result.data.user);
        setToken(token);
        navigate('/home');
      }
      return result;
    } catch (err) {
      console.error(err);
    }
  };

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
