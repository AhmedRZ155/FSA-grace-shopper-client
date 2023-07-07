import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import { useState, useEffect } from 'react';

export default function Root() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
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
  }, []);
  return (
    <div>
      <Navbar user={user} />
      <Outlet context={{ user, setUser, token, setToken, cart }} />
    </div>
  );
}
