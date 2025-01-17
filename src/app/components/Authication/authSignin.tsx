import { signUp } from 'aws-amplify/auth';

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};

export const handleSignUp = async ({
  username,
  password,
  email,
}: SignUpParameters): Promise<{ success: boolean; message: string }> => {
  try {
    const { userId } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
        autoSignIn: true,
      },
    });

    console.log(userId);
    return { success: true, message: "Sign-up successful!" };
  } catch (error: any) {
    console.error("Error signing up:", error);
    return {
      success: false,
      message: error?.message || "An error occurred during sign-up.",
    };
  }
};
