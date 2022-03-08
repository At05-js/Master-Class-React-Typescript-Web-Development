import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { customMiddleware } from './store/middlewares/customMiddleware';
import { anotherMiddleware } from './store/middlewares/anotherMiddleware';
import { rootReducer } from './store/reducer/rootReducer';

const store = createStore(rootReducer, { users: ['Josue', 'May'], fruits: ['apple', 'avocado'] }, applyMiddleware(customMiddleware, anotherMiddleware));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route component={AboutPage} path="/about" />
            <Route component={HomePage} path="/" />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;