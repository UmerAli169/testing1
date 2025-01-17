import {
    confirmResetPassword,
    type ConfirmResetPasswordInput
  } from 'aws-amplify/auth';
  
  export const handleConfirmResetPassword = async ({
    username,
    confirmationCode,
    newPassword
  }: ConfirmResetPasswordInput) => {
    try {
      // Attempt to reset password using AWS Amplify
      
   await confirmResetPassword({ username, confirmationCode, newPassword });

      // Return success response
      return { success: true, message: 'Password reset successfully!' };
    } catch (error:any) {
      // Log and return error
      console.error(error);
      return { success: false, message: error.message || 'Failed to reset password. Please try again.' };
    }
  };
  