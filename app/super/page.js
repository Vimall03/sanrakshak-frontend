'use client'
import React from 'react'
import AuthLayer from '@/Auth/AuthLayer'

const SuperDashboard = () => {
  return (
    <div>
      <h1>I am in SuperDashboard</h1>
    </div>
  )
}

export default AuthLayer("super")(SuperDashboard)
