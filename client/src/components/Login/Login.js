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
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' };
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    if (token) loggedIn = true;

    function login(e) {
        e.preventDefault();
        const data = { email: email, password: password };
        try {
            const token = axios.post("http://localhost:8080/auth/login", data).then((response) => {

                localStorage.setItem("token", token);

                setLoggedIn(true);
            })
        } catch (err) {

            console.log(err);
        }
    }

    if (loggedIn === true) {
        return <Redirect to="/admin" />
    }
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
                    <Link href="#" onClick={() => { history.push("/register"); }} >
                        Sign Up
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login
