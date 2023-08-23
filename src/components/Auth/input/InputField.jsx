import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './InputField.module.css';


const InputField = ({
  label,
  icon,
  showPasswordToggle = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          {...field}
          {...props}
          className={`${styles.input} ${
            meta.touched && meta.error ? styles.errorBorder : ''
          }`}
          type={showPassword && props.type === 'password' ? 'text' : props.type}
        />
        {icon && <div className={styles.iconContainer}>{icon}</div>}
        {showPasswordToggle && props.type === 'password' && (
          <div className={styles.toggleButton}>
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className={styles.toggleIcon} />
              ) : (
                <FaEye className={styles.toggleIcon} />
              )}
            </button>
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className={styles.errorText}>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
};

export default InputField;