import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { Redirect } from 'react-router';
import Register from '../Register';

const Login = () => {


    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#3f51b5' }
    const btnstyle = { margin: '8px 0' };
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    if (token) loggedIn = true;

    //Login Fucntion
    function login() {
        const data = { email: email, password: password };
        try {
            const token = axios.post("http://localhost:8080/signin", data).then((response) => {
               if(response.data.error)
               {
                alert(response.data.error);
               } else{
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                setRole(response.data.role);
                setLoggedIn(true);
               }
              
            })
        } catch (err) {
            console.log(err);
        }
    }

    // if ((loggedIn === true) && role === 'admin') {
    //     return <Redirect to="/admin" />
    // }
    // if (loggedIn === true && role === 'reporter') {
    //     return <Redirect to="/reporter" />
    // }

    // if (loggedIn === true && role === 'reader') {
    //     return <Redirect to="/reader" />
    // }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' onChange={(event) => { setEmail(event.target.value) }} placeholder='Enter username' fullWidth required />
                <TextField label='Password' onChange={(event) => { setPassword(event.target.value) }} placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }

                    label="Remember me"
                />
                <Button type='submit' onClick={login} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Typography > Do you have an account ?
                    {/* <Link href="#" onClick={() => { history.push("/signup"); }} >
                        Sign Up
                    </Link> */}
                    <Link href="#" onClick={() => { history.push("/signup"); }} >
                        Sign Up
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login
