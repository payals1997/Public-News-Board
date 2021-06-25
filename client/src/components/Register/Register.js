import React from "react";
import './Register.styles.css';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup';
import axios from 'axios'
import { Redirect } from "react-router";
import { useHistory } from "react-router";

const Register = () => {
    let history = useHistory();
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#3f51b5" };
    const marginTop = { marginTop: 5 };
    const initialValues = {
        name: '',
        email: '',
        role: '',
        phone: '',
        city: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        role: Yup.string().oneOf(["reporter", "reader"], "Required").required("Required"),
        phone: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        city: Yup.string().required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (data) => {
      
       axios.post("http://localhost:3001/signup", data).then((response) => {
            console.log(data);

            if (data.role === 'reader') {
                alert("You Registered Successfully !!!!");
                history.push("/signin");

            }
            if (data.role === 'reporter') {
                alert("Your Account Will Be Activated Within 24 Hours !!!!");
                history.push("/signin");
            }

        })
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant="caption" gutterBottom>
                        Please fill this form to create an account !
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="name" label="Name" placeholder="Enter your name" helperText={<ErrorMessage name="name" component = "errorMsg" />} />
                            <Field as={TextField} fullWidth name="email" label="Email" placeholder="Enter your email" helperText={<ErrorMessage name="email" component = "errorMsg" />} />
                            <Field as={TextField} fullWidth name="city" label="City" placeholder="Enter your city" helperText={<ErrorMessage name="city" component = "errorMsg"/>} />
                            <Field as={TextField} fullWidth name="phone" label="Phone" placeholder="Enter your Phone" helperText={<ErrorMessage name="phoneNumber" component = "errorMsg"/>} />
                            <Field as={TextField}
                                fullWidth
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                helperText={<ErrorMessage name="password" component = "errorMsg" />}
                            />
                            <Field as={TextField}
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                placeholder="Confirm your password"
                                helperText={<ErrorMessage name="confirmPassword" component = "errorMsg" />}
                            />

                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Role</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="role"
                                    name="role"
                                  
                                    style={{ display: "initial" }}
                                >
                                    <FormControlLabel
                                        value="reporter"
                                        control={<Radio />}
                                        label="Reporter"
                                    />
                                    <FormControlLabel
                                        value="reader"
                                        control={<Radio />}
                                        label="Reader"
                                    />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="role" component = "errorMsg"/></FormHelperText>
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" component = "errorMsg"/></FormHelperText>
                            <Button type='submit' variant='contained' 
                                color='primary'>SIGNUP</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default Register;
