import React from 'react'
import { ProfileProps } from './interface'

export const Profile: React.FC<ProfileProps> = ({ click }) => {
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Click: {click}</h2>
    </div>
  )
}
