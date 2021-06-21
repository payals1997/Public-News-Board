import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

export default function Reader() {
    let history = useHistory();
    let [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem("token");

    if (token) loggedIn = true;

    if (loggedIn === false) {
        return <Redirect to="/signin" />
    }
    function logout() {
        setLoggedIn(false);
        console.log("button clicked");

        history.push("/logout");
    }
    return (
        <div>
        <h1>Reader Dashboard</h1>
        <button onClick={logout}>Logout</button>
    </div>
    )
}
