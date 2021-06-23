import './Navbar.styles.scss'

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="icon"></div>
        <img
          id="navbar-logo"
          src="http://minkewhaleproject.org/wp-content/uploads/2017/11/channel-7-news-logo.jpg"
          alt="logo"
        />
        <div className="nav-items"></div>
      </div>
    </>
  );
}

export default Navbar;
