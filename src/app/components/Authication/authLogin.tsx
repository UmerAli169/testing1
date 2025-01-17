import { signIn, type SignInInput } from 'aws-amplify/auth';

export const  handleSignIn=async({ username, password }: SignInInput) => {
  try {
    const { isSignedIn } = await signIn({ username, password });
    return { success:true,isSignedIn };
  } catch (error:any) {
    return { success:true,message:error.message };
  }
}