import React from 'react'
import { withTrackClick } from '../hoc/withTrackClick'
import { ProfileProps } from './interface'

const Profile: React.FC<ProfileProps> = ({ click }) => {
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Click: {click}</h2>
    </div>
  )
}

export default withTrackClick(Profile);