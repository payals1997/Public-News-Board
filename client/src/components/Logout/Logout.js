import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';

export default function Logout() {
   localStorage.removeItem("token");
   
    return (
        <div>
            <h1>You have been logged out!!!</h1>
            <Link to = "/login">Login Again</Link>
        </div>
    )
}
