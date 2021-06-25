import React from 'react'
import { Link } from 'react-router-dom'

function AdminTernary({stats, role, handleClick, handleClickTwo}) {
    return (
        <>
            {(stats === false && role === "admin") ? (
                <Link to="/statistics" onClick={handleClick}>
                  STATISTICS
                </Link>
              ) : (
                <Link to="/dashboard" onClick={handleClickTwo}>
                  DASHBOARD
                </Link>
              )}
        </>
    )
}

export default AdminTernary
