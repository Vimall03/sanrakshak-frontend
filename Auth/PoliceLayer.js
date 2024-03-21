'use client'
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/AuthContext';
import { AuthContext } from '@/context/AuthContext';

const PoliceLayer = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated, token, setToken, userName, setUserName, userEmail, setUserEmail, userRole, setUserRole, userCity, setUserCity, userProfileImage, setUserProfileImage } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && router && userRole) {
      if (!isAuthenticated) {
        router.push('/login');
      }

      if (!userRole === 'police') {
        router.push('/login');
      }
    }
  }, [userRole, router, isAuthenticated]);
  return isAuthenticated && userRole === 'police' && (
    <>
      {children}
    </>
  );
}

export default PoliceLayer
