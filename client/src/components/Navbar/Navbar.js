import HambergerApp from "../SideBar/HambergerApp";
import './Navbar.styles.scss'

function Navbar({catAndCity , setCatAndCity}) {
  return (
    <>
      <div className="nav">
        <div className="icon">
          <HambergerApp catAndCity={catAndCity} setCatAndCity={setCatAndCity}/>
        </div>
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
