import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navLinkAll'>
      <div className='sepTopNav'>
        <div className='topNav'>
          <Link className='topNavLink' to={'/'}>
            find a store
          </Link>
          <Link className='topNavLink' to={'/featured'}>
            help
          </Link>
          <Link className='topNavLink' to={'/women'}>
            join us
          </Link>

          <Link className='topNavLink' to={'/men'}>
            sign in
          </Link>
        </div>
      </div>
      <div className='sepBottomNav'>
        <div className='bottomNav'>
          <Link className='navLink' to={'/'}>
            Home
          </Link>
          <Link className='navLink' to={'/featured'}>
            Featured
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
          <Link className='navLink' to={'/register'}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
