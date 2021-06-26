
import { useHistory } from 'react-router';
import { useEffect } from 'react';


export default function Logout() {
   localStorage.removeItem("token");
   localStorage.removeItem("role");
   const history = useHistory();

   const logedout = ()=>{
    alert("You have been logged out!!!")
    console.log("bbyee");
    history.push("/");
   }
   
   useEffect(()=>{
       logedout();
   },[])
   
    return null;
}
