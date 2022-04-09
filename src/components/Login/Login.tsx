import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./Login.module.css";
import {connect, useSelector } from "react-redux";
import { LoginTc } from "../../redux/auth-reducer";
import { NavLink } from "react-router-dom";
import { getIsAuthSel, getCaptchaUrlSel } from "../../redux/auth-selectors";

// interface PropsType {
//   LoginTc: (email: string, password: string, rememberMe: boolean, captcha: string,setStatus: any) => void;
// }

const Login: React.FC<any> = ({LoginTc}) => {
  const isAuth = useSelector(getIsAuthSel);
  const captchaUrl = useSelector(getCaptchaUrlSel);

  if (isAuth) {
    return <NavLink to="/profile"></NavLink>;
  }

  const validationSchemes = yup.object().shape({
    password: yup
      .string()
      .typeError("There must be a line")
      .required("Must be completed"),
    email: yup
      .string()
      .email("Please enter your email address")
      .required("Must be completed"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false, captcha: "" }}
      validationSchema={validationSchemes}
      onSubmit={(values, { setSubmitting, setStatus}) => {
        LoginTc(
          values.email,
          values.password,
          values.rememberMe,
          setStatus,
          values.captcha
        );
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className={s.form}>
          <div>
            <div className={s.error}>{status}</div>
            <div>
              {captchaUrl && <img src={captchaUrl} alt="captcha" />}
              {captchaUrl && (
                <div>
                  <label>
                    Enter symbols from captcha
                    <Field
                      className={s.input}
                      type="text"
                      name="captcha"
                      placeholder="Enter symbols from captcha"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <ErrorMessage className={s.error} name="email" component="div" />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage className={s.error} name="password" component="div" />
          <label className={s.rememberMe}>
            Remember Me
            <Field type="checkbox" name="rememberMe" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};


export default connect(null, { LoginTc })(Login);