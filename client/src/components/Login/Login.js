import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormHelperText } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { Redirect } from "react-router";
import Register from "../Register/Register";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Login.style.css";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#3f51b5" };
  const btnstyle = { margin: "20px 100px" };
  let history = useHistory();
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) setLoggedIn(true);
  }, []);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
  });
  const onSubmit = (data) => {
    try {
      axios.post("http://localhost:3001/signin", data).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          setRole(response.data.role);
          setLoggedIn(true);
          alert("You Logged In Successfully !!!!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (loggedIn === true) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" component="span" />}
              />
              <Field
                as={TextField}
                fullWidth
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" component="span" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="RememberMe" />}
                label="Remeber Me."
              />

              <Typography>
                {" "}
                Do you have an account ?
                <Link
                  href="#"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
              >
                SIGNIN
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
