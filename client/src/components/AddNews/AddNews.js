import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AddMedia from "./AddMedia";
import {
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button
} from "@material-ui/core";

function AddNews() {
  // initialValues={} onSubmit={}
  return (
    <div className="addNewsPage">
      <form method="POST" enctype="multipart/form-data" action="/upload">
        
      </form>
    </div>
  );
}

export default AddNews;





