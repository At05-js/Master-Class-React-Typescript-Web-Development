import React from 'react';
import './App.css';
import UsersManagement from './components/UsersManagement';
import { Instruction } from './components/Instruction';

function App() {
  return (
    <div className="App">
      <Instruction />
      <UsersManagement />
    </div>
  );
}

export default App;
