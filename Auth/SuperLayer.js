'use client'
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/AuthContext';
import { AuthContext } from '@/context/AuthContext';

const SuperLayer = ({ children }) => {
  const { isAuthenticated, userRole, } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && router && userRole) {
      if (!isAuthenticated) {
        router.push('/login');
      }

      if (!userRole === 'super') {
        router.push('/login');
      }
    }
  }, [router, isAuthenticated, userRole]);
  return isAuthenticated && userRole === 'super' && (
    <>
      {children}
    </>
  );
}

export default SuperLayer
