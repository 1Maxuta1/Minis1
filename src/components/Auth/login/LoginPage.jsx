import React from "react";
import { Formik, Form, } from "formik";
import * as Yup from "yup";
import InputField from "../input/InputField";
import { AiFillMail } from "react-icons/ai";
import styles from "./LoginPage.module.css"; 
import { BrowserRouter as Router, Link } from "react-router-dom";

const LoginPage = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string().required("Password Required!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={(styles.fontCustom, styles.bgCustomImage)}>
      <h1 className={styles.title}>ROMBO</h1>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          alt="Logo"
          src="/img/logo.png"
          width={100}
          height={100}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div className={styles.formContainer}>
            <Form className={styles.form}>
              <h1 className={styles.formTitle}>Log in</h1>
              <div className={styles.loginLinkContainer}>
                <h1 className={styles.loginLinkText}>
                  Still don&apos;t have an account?
                </h1>
                <Link href="/">
                  <p className={styles.loginLink}>Sign up</p>
                </Link>
              </div>

              <InputField
                type="email"
                name="email"
                placeholder="Your email"
                icon={<AiFillMail />}
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                showPasswordToggle={true}
              />
              <button className={styles.registerButton} type="submit">
                Log in
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
