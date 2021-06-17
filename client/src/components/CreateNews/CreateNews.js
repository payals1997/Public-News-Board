import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

export default function CreateNews() {
    useEffect(() => {
        axios.post("http//localhost:8080/auth/createNews").then((response) => {
            console.log("post created");
        })

    }, [])

    let [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem("token");

    if (token) loggedIn = true;

    if (loggedIn === false) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <h1>CreateNews Page</h1>
        </div>
    )
}
