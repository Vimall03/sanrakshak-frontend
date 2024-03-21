'use client'
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/AuthContext';
import { AuthContext } from '@/context/AuthContext';

const AuthLayer = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated, token, setToken, userName, setUserName, userEmail, setUserEmail, userRole, setUserRole, userCity, setUserCity, userProfileImage, setUserProfileImage } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      console.log("I am authenticated layer and values of is authenticated: ", isAuthenticated);
    }
  }, [isAuthenticated]);

  console.log("I am authenticated layer", isAuthenticated, userRole)

  return isAuthenticated && (
    <>
      {children}
    </>
  );
};

export default AuthLayer;

