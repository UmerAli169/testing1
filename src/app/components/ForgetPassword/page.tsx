"use client";
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Form.module.css'; // Adjust the path to your CSS module
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { handleSignUp } from '../Authication/authSignin';
import { resetPassword } from '@aws-amplify/auth';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
});

const ForgotPassword = () => {
  const router = useRouter();

  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 4000); // Display message for 4 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  const initialValues = {
    email: '',
  };

  const handleEmailSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      let response :any= await resetPassword({  
        username: values.email
      });

      if (!response.isPasswordReset) {
        setMessageType('success');
        setMessage('A verification code has been sent to your email');
        
          router.push(`/components/OtpPasswordReset?email=${encodeURIComponent(values.email)}`);
        } else {
        setMessageType('error');
        setMessage(response.message || 'Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageType('error');
      setMessage('An error occurred, please try again.');
    }

    setSubmitting(false);
  };

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
          <h2>Reset Password</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className={`${styles.closeButton} ${styles.fixedSizeIcon}`}
            onClick={crossFunction}
          />
          <Formik
            initialValues={initialValues}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleEmailSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={styles.inputBox}>
                  <Field type="email" name="email" placeholder="Enter your email" />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </div>
                <button type="submit" className={styles.button} disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
