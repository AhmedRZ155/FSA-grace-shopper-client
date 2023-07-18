<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Notifications from './components/Notifications'

import { useState, useEffect } from 'react'

const initialToken = localStorage.getItem('token') || ''

export default function Root() {
  const [user, setUser] = useState({})
  const [token, setToken] = useState(initialToken)
  const [cart, setCart] = useState([])
=======
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Notifications from './components/Notifications';

import { useState, useEffect } from 'react';

const initialToken = localStorage.getItem('token') || '';

export default function Root() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(initialToken);
  const [cart, setCart] = useState([]);
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/users/me`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        setUser({
          name: result.data.name,
          email: result.data.email,
          type: result.data.type,
        });
        setCart(result.data.cart);
      } catch (err) {
        console.error(err);
      }
    };
    if (token) {
      userData();
    }
<<<<<<< HEAD
  }, [token])
=======
  }, [token]);
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
  return (
    <div>
      <Navbar user={user} />
      <Outlet context={{ user, setUser, token, setToken, cart, setCart }} />
      <Notifications />
    </div>
  );
}
