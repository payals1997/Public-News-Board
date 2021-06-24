import './Navbar.styles.scss'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="icon">
        </div>
        <img
          id="navbar-logo"
          src="http://minkewhaleproject.org/wp-content/uploads/2017/11/channel-7-news-logo.jpg"
          alt="logo"
        />

        <div className="nav-items">
          <Link to ="/signup">Sign Up</Link>
          <Link to ="/signin">Sign In</Link>          
        </div>
      </div>
    </>
  );
}

export default Navbar;
