import { Outlet, useRouteLoaderData } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
export const BASE_URL = 'http://localhost:5173/';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/footer';

export default function Root() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
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
        setUser(result.data);
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
      <Outlet context={{ user, setUser, token, setToken }} />
    </div>
  );
}
