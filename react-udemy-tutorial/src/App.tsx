import React from 'react';
import './App.css';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <Profile ownerName="Josue" />
      <NewsFeed />
    </React.Fragment>
  );
}

export default App;