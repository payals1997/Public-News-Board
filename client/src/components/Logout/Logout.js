import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { Redirect } from 'react-router';

export default function Logout({setLoggedIn}) {
   localStorage.removeItem("token");
   localStorage.removeItem("role");
   const history = useHistory();

   const logedout = ()=>{
    {alert("You have been logged out!!!")}
    console.log("bbyee");
    // setLoggedIn(false)
    history.push("/");
   }
   
   useEffect(()=>{
       logedout();
   },[])
   
    return null;
}
