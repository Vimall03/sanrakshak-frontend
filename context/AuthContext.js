'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [userProfileImage, setUserProfileImage] = useState(null);

  console.log("token", token);

  useEffect(() => {
    const userDataFromCookie = Cookies.get('userData');
    const token = Cookies.get('accessToken');
    var userData;
    if (userDataFromCookie) {
      userData = JSON.parse(userDataFromCookie);
    }
    console.log("i am in context", userData)
    setToken(token)
    if (token) {
      setIsAuthenticated(true);
    }
    else {
      setIsAuthenticated(false);
    }
    if (userData) {
      setUserName(userData.userName)
      setUserEmail(userData.email)
      setUserCity(userData.city)
      setUserRole(userData.role)
    }

  }, [isAuthenticated, userRole, userCity, token, router])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken, userName, setUserName, userEmail, setUserEmail, userRole, setUserRole, userCity, setUserCity, userProfileImage, setUserProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};



const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;