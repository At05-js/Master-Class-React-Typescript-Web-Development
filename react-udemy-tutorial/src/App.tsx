import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagement from './components/CounterManagement';

interface AppState {
  change: boolean
}
class App extends React.Component<{}, AppState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      change: true
    }
  }
  clickButton = () => {
    this.setState({change:!this.state.change})
  }
  render() {
    return(
      <>
      <h1>My App</h1>
      <CounterManagement ownerName='josue'/>
      </>
    )
  }
} 
export default App;
