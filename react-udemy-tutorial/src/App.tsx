import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router';
import AboutPage from './components/AboutPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Instruction />
      <RoutingPractice />
    </div>
  );
}

export default App;