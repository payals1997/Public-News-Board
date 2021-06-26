import "./Navbar.styles.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AdminTernary from "./AdminTernary";
import ReporterTernary from "./ReporterTernary";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [stats, setStats] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleClick = () => {
    setStats(true);
  };

  const handleClickTwo = () => {
    setStats(false);
  };

  useEffect(() => {
    if (token) setLoggedIn(true);
  }, []);

  console.log(stats);
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

              {(() => {
                switch (role) {
                  case "admin":
                    return (
                      <AdminTernary
                        stats={stats}
                        handleClick={handleClick}
                        handleClickTwo={handleClickTwo}
                        role={role}
                      />
                    );
                  case "reporter":
                    return (
                      <ReporterTernary
                        stats={stats}
                        handleClick={handleClick}
                        handleClickTwo={handleClickTwo}
                        role={role}
                      />
                    );
                }
              })()}
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
