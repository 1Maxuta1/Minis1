import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./RegistrationPage.module.css"; 
import InputField from "../input/InputField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserAuth } from "../../../auth/AuthContext";

const RegistrationPage = () => {
  const {createUser} = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  try{
    await(createUser(email,password)
    )
  }
  catch(e){
    setError(e.message)
    console.log(e.message)
  }
  }
 
    const validate = Yup.object({
      firstName: Yup.string().required("First name required!"),
      lastName: Yup.string().required("Last name required!"),
      email: Yup.string().email("Email is invalid!").required("Email Required!"),
      date: Yup.date().nullable().required("Date of birth required!"),
      password: Yup.string()
        .min(8, "Password must be minimum 8 digits!")
        .required("Password Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match!")
        .required("Confirm password is required!"),
      checkbox: Yup.boolean().test(
        "is-checked",
        "Fill the checkbox to continue",
        (value) => value === true
      ),
    });
  
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      date: null,
      password: "",
      confirmPassword: "",
      checkbox: false,
    };
  
    return (
        <div className={styles.container}>
      <h1 className={styles.title}>MINIS</h1>
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
            <Form onSubmit={handleSubmit} className={styles.form}>
              <h1 className={styles.formTitle}>Sign up</h1>
              <div className={styles.loginLinkContainer}>
                <h1 className={styles.loginLinkText}>
                  Already have an account?
                </h1>
                <Link className={styles.loginLink} href="/login">
                  Log in
                </Link>
              </div>
              <InputField 
                type="text"
                name="firstName"
                placeholder="First name"
                icon={<FaUser />}
              />
               <InputField
                type="text"
                name="lastName"
                placeholder="Last name"
                icon={<FaUser />}
              />
              <InputField
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Your email"
                icon={<AiFillMail />}
              />
              <DatePicker
                 onKeyDown={(e) => e.preventDefault()} 
             onKeyUp={(e) => e.preventDefault()} 
             onFocus={(e) => e.preventDefault()}
             placeholderText="Date of birth"
             selected={formik.values.date}
             onChange={(date) => formik.setFieldValue("date", date)}
             onBlur={formik.handleBlur("date")}
             showYearDropdown={true}
             yearDropdownItemNumber={100}
             scrollableYearDropdown // Включаем возможность прокрутки списка годов
             minDate={new Date(new Date().getFullYear() - 100, 0, 1)} 
             maxDate={new Date()} 
                className={`${styles.datePicker} ${
                  formik.touched.date && formik.errors.date
                    ? styles.errorBorder
                    : styles.normalBorder
                }`}
              />
                {formik.touched.date && formik.errors.date && (
                <div className="mt-2 text-md text-red-600 mb-8">
                  {formik.errors.date}
                </div>
              )}
              <InputField
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
                showPasswordToggle={true}
              />
              <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                showPasswordToggle={true}
              />
    <p className={styles.termsText}>
                By checking this box, I agree to terms of the service
              </p>
              <InputField
                className={styles.styledInput}
                type="checkbox"
                name="checkbox"
              />
              <button className={styles.registerButton} type="submit">
                Register
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
