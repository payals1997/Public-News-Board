import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';

export default function Logout() {
   localStorage.removeItem("token");
   localStorage.removeItem("role");
   
    return (
        <div>
            <h1>You have been logged out!!!</h1>
            <Link to = "/signin">Login Again</Link>
        </div>
    )
}
