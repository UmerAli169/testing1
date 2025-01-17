import {  signUp } from "@aws-amplify/auth";



export const handleSignUp = async ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const response = await signUp({
      username,
      password,
      attributes: { email },
    });
    console.log("Sign up successful:", response);
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
};
