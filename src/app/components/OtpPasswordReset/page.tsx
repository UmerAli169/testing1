"use client";

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Form.module.css'; // Adjust the path to your CSS module
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleConfirmResetPassword } from '../Authication/forwardPassword';

// Schema for the full form (OTP, new password, confirm new password)
const ResetPasswordSchema = Yup.object().shape({
  otp: Yup.string().length(6, 'OTP must be 6 digits').required('Required'),
  newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match') // Ensure it matches newPassword
    .required('Required'),
});

const ResetPassword = () => {
  const searchParams = useSearchParams(); // Fetch query params
  const emailFromQuery = searchParams.get("email"); // Get email from query
  const router = useRouter();
  

  const [message, setMessage] = useState<string | null>(null); // Message to show after submission
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null); // Success/Error message types
  const [showForm, setShowForm] = useState(true); // Controls visibility of the form

  useEffect(() => {
    if (!emailFromQuery) {
      router.push("/");
    }
  }, [emailFromQuery, router]);

  const initialValues = {
    otp: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await handleConfirmResetPassword({
        username: emailFromQuery!,
        confirmationCode: values.otp,
        newPassword: values.newPassword,
      });

      if (response.success) {
        setMessage(response.message); // Success message
        setMessageType('success');
        setTimeout(() => {
          router.push('/components/Dashboard'); // Redirect to the dashboard after success
        }, 1500);
      } else {
        setMessage(response.message); // Error message
        setMessageType('error');
        setTimeout(() => {
          router.push('/'); 
        }, 2000);
      }
    } catch (error) {
      setMessage('An error occurred during password reset. Please try again.'); // Error message
      setMessageType('error');
      setTimeout(() => {
        router.push('/'); // Redirect to signup page if error
      }, 2000);
    }

    setSubmitting(false);
  };

  // Close the form and redirect to the home page
  const crossFunction = () => {
    setShowForm(false);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <>
      {message && (
        <div className={`${styles.message} ${messageType === 'success' ? styles.success : styles.error}`}>
          {message}
        </div>
      )}

      <div className={`${styles.formContainer} ${showForm ? styles.visible : ''}`}>
        <div className={styles.form}>
          <FontAwesomeIcon
            icon={faTimes}
            className={`${styles.closeButton} ${styles.fixedSizeIcon}`}
            onClick={crossFunction}
          />

          <h2>Forget Password</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* OTP field */}
                <div className={styles.inputBox}>
                  <Field type="text" name="otp" placeholder="Enter your OTP" />
                  <ErrorMessage name="otp" component="div" className={styles.error} />
                </div>

                {/* New Password field */}
                <div className={styles.inputBox}>
                  <Field type="password" name="newPassword" placeholder="New Password" />
                  <ErrorMessage name="newPassword" component="div" className={styles.error} />
                </div>

                {/* Confirm New Password field */}
                <div className={styles.inputBox}>
                  <Field type="password" name="confirmNewPassword" placeholder="Confirm New Password" />
                  <ErrorMessage name="confirmNewPassword" component="div" className={styles.error} />
                </div>

                {/* Submit button */}
                <button type="submit" className={styles.button} disabled={isSubmitting}>
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
