import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ user, setToken, setUser }) {
  function handleLogout() {
    localStorage.removeItem('token')
    alert(`Successfully logged out of ${user.name}'s profile`)
    setToken('')
    setUser({})
  }
  return (
    <div className="navLinkAll">
      <div className="bottomNav">
        <Link className="navLink" to={'/'}>
          Home
        </Link>
        <Link className="navLink" to={'/Products'}>
          Products
        </Link>
        <Link className="navLink" to={'/women'}>
          Women
        </Link>

        <Link className="navLink" to={'/men'}>
          Men
        </Link>
        <Link className="navLink" to={'/Kids'}>
          Kids
        </Link>
        {!user.name && (
          <Link className="navLink" to={'/register'}>
            Login or Register
          </Link>
        )}
        {user.name && (
          <Link className="navLink" to="/Carts">
            Cart
          </Link>
        )}
      </div>
      <div className="welcomeLog">
        {user.name && <p className=" welcomeUser">Welcome, {user.name}</p>}
        {user.name && (
          <Link onClick={handleLogout} className="logoutUser" to={'/'}>
            Logout
          </Link>
        )}
      </div>
    </div>
  )
}
