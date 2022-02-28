import React from 'react'
import { withTrackClick } from '../hoc/withTrackClick'
import { NewsFeedProps } from './interface'

const NewsFeed:React.FC<NewsFeedProps> = ({ click }) => {
  return (
    <div>
      <h1>NewsFeed Component</h1>
      <h2>Click: {click}</h2>
    </div>
  )
}
export default withTrackClick(NewsFeed);