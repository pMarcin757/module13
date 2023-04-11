import { useFormik } from "formik";
import React from "react";
import './index.css';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik ({
    initialValues : {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailField = "Field required";
      if(!values.pswField) errors.pswField = "Username should be an email";
      return errors;
    }
  })

  return (
    <div>
        <form on submit={formik.handleSubmit}>
          <div>Email:</div>
          <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div> : null}
          <div>Password:</div>
          <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div> : null}
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
