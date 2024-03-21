'use client'
import React from 'react'
import AuthLayer from '@/Auth/AuthLayer'

const GeneralPolice = () => {
  return (
    <div>
      <h1>hello from general police</h1>
    </div>
  )
}

export default AuthLayer("general")(GeneralPolice)
