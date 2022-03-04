import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import AboutPage from './components/AboutPage';
import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
        <Route component={AboutPage} path="/about" />
        <Route render={(routeProps) =>  <HomePage {...routeProps} />} path="/home" />
        <Route children={(routeProps) => routeProps.match ? <HomePage {...routeProps} /> : <div>Does not match</div>} path="/children" />
    </BrowserRouter>
  );
}

export default App;