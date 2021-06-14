import React from "react";
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
import * as Yup from 'yup'

const Register = () => {
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const marginTop = { marginTop: 5 };
    const initialValues = {
        name: '',
        email: '',
        role: '',
        phoneNumber: '',
        city: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        role: Yup.string().oneOf(["reporter", "reader"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        city: Yup.string().required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
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
                            <Field as={TextField} fullWidth name="name" label="Name" placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label="Email" placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} fullWidth name="city" label="City" placeholder="Enter your city" helperText={<ErrorMessage name="city" />} />
                            <Field as={TextField} fullWidth name="phoneNumber" label="Phone" placeholder="Enter your Phone" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField}
                                fullWidth
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                helperText={<ErrorMessage name="password" />}
                            />
                            <Field as={TextField}
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                placeholder="Confirm your password"
                                helperText={<ErrorMessage name="confirmPassword" />}
                            />

                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Role</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="role"
                                    name="role"
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
                            <FormHelperText><ErrorMessage name="role" /></FormHelperText>
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default Register;
