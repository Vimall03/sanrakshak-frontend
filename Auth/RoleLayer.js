'use client'
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/AuthContext';
import PoliceLayer from './PoliceLayer';
import SuperLayer from './SuperLayer';
import GeneralLayer from './GeneralLayer';
import { AuthContext } from '@/context/AuthContext';

const RoleLayer = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated, token, setToken, userName, setUserName, userEmail, setUserEmail, userRole, setUserRole, userCity, setUserCity, userProfileImage, setUserProfileImage } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {

    if (!isAuthenticated) {
      router.push('/login');
    }

    // if (isAuthenticated && router && userRole) {  // Check if userRole exists before using it
    //   if (userRole === 'super' && !router.pathname.startsWith('/super')) {
    //     router.push('/super');
    //   } else if (userRole === 'police' && !router.pathname.startsWith('/police')) {
    //     router.push('/police');
    //   } else if (userRole === 'general' && !router.pathname.startsWith('/general')) {
    //     router.push('/general');
    //   }
    // }
  }, [isAuthenticated, userRole]);
  console.log("I am role layer")

  if (isAuthenticated && userRole === 'super') {
    return (
      <>
        <SuperLayer>
          {children}
        </SuperLayer>
      </>
    );
  } else if (isAuthenticated && userRole === 'police') {
    return (
      <>
        <PoliceLayer>
          {children}
        </PoliceLayer>
      </>
    );
  } else if (isAuthenticated && userRole === 'general') {
    return (
      <>
        <GeneralLayer>
          {children}
        </GeneralLayer>
      </>
    );
  }
}

export default RoleLayer
