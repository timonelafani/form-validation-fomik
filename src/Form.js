import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import "./Form.css";

const Form = () => {
  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").required("Name is equired"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .required("Lastname is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "Password must contain at least one lowercase letter, one uppercase letter, one number and at least 8 characters!"
      )
      .required("Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Repeat password is required"),
  });
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign up</h1>
        <div className="line"></div>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={() => {
            alert("Form submitted successfully!");
          }}
        >
          {({ errors }) => (
            <FormikForm>
              <div style={{ width: "100%" }}>
                <div className="field">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={errors.name && "error"}
                  />
                  {errors.name && (
                    <span className="errorMessage">{errors.name}</span>
                  )}
                </div>
                <div className="field">
                  <Field
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Lastname"
                    className={errors.lastname && "error"}
                  />
                  {errors.lastname && (
                    <span className="errorMessage">{errors.lastname}</span>
                  )}
                </div>
                <div className="field">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={errors.email && "error"}
                  />
                  {errors.email && (
                    <span className="errorMessage">{errors.email}</span>
                  )}
                </div>
                <div className="field">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={errors.password && "error"}
                  />
                  {errors.password && (
                    <span className="errorMessage">{errors.password}</span>
                  )}
                </div>
                <div className="field">
                  <Field
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    className={errors.repeatPassword && "error"}
                  />
                  {errors.repeatPassword && (
                    <span className="errorMessage">
                      {errors.repeatPassword}
                    </span>
                  )}
                </div>
              </div>
              <Field type="submit" value="Submit" />
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
