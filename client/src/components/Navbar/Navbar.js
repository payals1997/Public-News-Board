import "./Navbar.styles.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [stats, setStats] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (token) setLoggedIn(true); 
  }, [])

  console.log(stats)
  return (
    <>
      <div className="nav">
        <div className="icon"></div>
        <img
          id="navbar-logo"
          src="https://image.flaticon.com/icons/png/512/21/21601.png"
          alt="logo"
        />

        <div className="nav-items">
          {loggedIn ? (
            <>
              <Link to="/logout">SIGNOUT</Link>
              {(stats === false && role === "admin") ? (
                <Link to="/statistics" onClick={() => setStats(true)}>
                  STATISTICS
                </Link>
              ) : (
                <Link to="/dashboard" onClick={() => setStats(false)}>
                  DASHBOARD
                </Link>
              )}
            </>
          ) : (
            <Link to="/signin">SIGNIN</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
