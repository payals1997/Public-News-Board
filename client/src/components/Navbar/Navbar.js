import './Navbar.styles.scss'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
function Navbar() {
  let [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem("token");

    if (token) loggedIn = true;
  return (
    <>
      <div className="nav">
        <div className="icon">
        </div>
        <img 
          id="navbar-logo"
          src="https://image.flaticon.com/icons/png/512/21/21601.png"
          alt="logo"
        />

        <div className="nav-items">
          {loggedIn ?
           (<Link to ="/logout">SIGNOUT</Link>):
           (<Link to ="/signin">SIGNIN</Link>)
           }
                   
        </div>
      </div>
    </>
  );
}

export default Navbar;
