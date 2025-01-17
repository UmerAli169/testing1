import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
export const handleSignUpConfirmation=async({
  username,
  confirmationCode
}: ConfirmSignUpInput) =>{
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode
    });
    console.log(isSignUpComplete)
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}   