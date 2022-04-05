import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { LoginTc } from "../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

const Login = ({ isAuth, LoginTc, captchaUrl }) => {
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

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    LoginTc(
      values.email,
      values.password,
      values.rememberMe,
      setStatus,
      values.captcha
    );
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: "",
          captcha: "",
        }}
        validationSchema={validationSchemes}
        validateOnBlur
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          status,
        }) => (
          <div className={s.form}>
            <div>
              <div className={s.error}>{status}</div>
              <div>
                {captchaUrl && <img src={captchaUrl} alt="captcha" />}
                {captchaUrl && (
                  <div>
                    <label htmlFor={"captcha"}>
                      Enter symbols from captcha
                    </label>
                    <br />
                    <input
                      type={"text"}
                      name={"captcha"}
                      placeholder={"Enter symbols from captcha"}
                      value={values.captcha}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                )}
              </div>
            </div>
            <p>
              <label htmlFor={"email"}>Email</label>
              <input
                className={s.input}
                type={`email`}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email address"
              />
            </p>
            {touched.email && errors.email && (
              <p className={s.error}>{errors.email}</p>
            )}
            <p>
              <label htmlFor={"password"}>Password</label>
              <input
                className={s.input}
                type={`password`}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
              />
            </p>
            {touched.password && errors.password && (
              <p className={s.error}>{errors.password}</p>
            )}
            <p>
              <label htmlFor={"rememberMe"}>
                Remember Me
                <input
                  id="rememberMe"
                  type="checkbox"
                  name="rememberMe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rememberMe}
                />
              </label>
            </p>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Login in
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { LoginTc })(Login);
