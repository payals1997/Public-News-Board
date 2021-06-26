import React from 'react'
import { Link } from 'react-router-dom'

function Ternary({stats, role, handleClick, handleClickTwo}) {
    return (
        <>
            {(stats === false && role === "reporter") ? (
                <Link to="/addNews" onClick={handleClick}>
                  ADDNEWS
                </Link>
              ) : (
                <Link to="/dashboard" onClick={handleClickTwo}>
                  DASHBOARD
                </Link>
              )}
        </>
    )
}

export default Ternary
