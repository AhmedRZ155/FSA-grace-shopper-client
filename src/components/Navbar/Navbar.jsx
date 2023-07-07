import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user }) {
  return (
    <div className='navLinkAll'>
      <div className='sepTopNav'>
        {/* <div className='topNav'>
          {!user.name && (
            <Link className='topNavLink' to={'/register'}>
              join us
            </Link>
          )}
        </div> */}
      </div>
      <div className='sepBottomNav'>
        <div className='bottomNav'>
          <Link className='navLink' to={'/'}>
            Home
          </Link>
          <Link className='navLink' to={'/Products'}>
            products
          </Link>
          <Link className='navLink' to={'/women'}>
            Women
          </Link>

          <Link className='navLink' to={'/men'}>
            Men
          </Link>
          <Link className='navLink' to='/kids'>
            Kids
          </Link>
          {!user.name && (
            <Link className='navLink' to={'/register'}>
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
