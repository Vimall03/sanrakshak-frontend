'use client'
import { useEffect, useContext } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/context/AuthContext';
import Dashboard from '../page';
import PoliceLayer from '@/Auth/PoliceLayer';
import { AuthContext } from '@/context/AuthContext';

const PoliceDashboard = ({ children }) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  return (
    <PoliceLayer >
      <h1>I am police dashboard</h1>
    </PoliceLayer>
  )
}

export default PoliceDashboard;
