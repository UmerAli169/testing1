'use client';

import React, { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';


export default function AuthStatus() {
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const user = await getCurrentUser();

      if (user && user.username) {  // Explicit check for username in the object
        setIsAuthenticated(true);
        setUserDetails(user);
      }
    } catch (error) {
      console.log('Error getting current user:', error);
      setIsAuthenticated(false);
      setUserDetails(null);
    }
};


  const handleLogout = async () => {
    try {
      await signOut();
      setIsAuthenticated(false);
      setUserDetails(null);
      router.push('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.log('Error during sign out:', error);
    }
  };

  const handleLogin = () => {
    router.push('/components/Signin'); // Redirect to login page
  };

  return (
    <>
   
      <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
        {isAuthenticated ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Welcome, {userDetails?.username}
            </h2>

            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-medium text-gray-700">User Details:</h3>
                <p className="text-sm text-gray-600">
                  <strong>Username: </strong>{userDetails?.username}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>User ID: </strong>{userDetails?.userId}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Login ID: </strong>{userDetails?.signInDetails?.loginId}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Authentication Flow: </strong>{userDetails?.signInDetails?.authFlowType}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700 transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              You are not logged in
            </h2>
            <button
              className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}
      </div>
        
      </div>
    </>
  );
}

