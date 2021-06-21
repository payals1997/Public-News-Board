import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
export default function CreateNews() {
    const initialValues = {
        title: "",
        content: "",
        ReporterName: ""
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        content: Yup.string().required(),
        ReporterName: Yup.string().required()
    });
    const onSubmit = (data) => {
        axios.post("http://localhost:8080/createNews", data
            , {
                headers: {
                    token: localStorage.getItem("token"),
                }
            }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }
            else {
                console.log(response.data);

            }

        });

    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"></ErrorMessage>
                    <Field name="title" ></Field>
                    <label>Content:</label>
                    <ErrorMessage name="content" component="span"></ErrorMessage>
                    <Field name="content" ></Field>
                    <label>ReporterName:</label>
                    <ErrorMessage name="ReporterName" component="span"></ErrorMessage>
                    <Field name="ReporterName" ></Field>
                    <button type="submit">CreatePost</button>
                </Form>
            </Formik>
        </div>
    )
}
