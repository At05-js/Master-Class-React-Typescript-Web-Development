import React from 'react';
import './App.css';
import { NewsFeed } from './components/NewsFeed';
import { Profile } from './components/Profile';
import TrackClick from './components/TrackClick';

export const App:React.FC=()=>{
  return (
    <React.Fragment>
      <h1>My App</h1>
      <TrackClick renderProps={(click)=><Profile click={click}/>}/>
      <TrackClick renderProps={(click)=><NewsFeed click={click}/>}/>
    </React.Fragment>
  )
}
export default App;
