import React, { Component } from 'react';
import './App.css';
import {Card} from 'semantic-ui-react';
import SocialHistoryAddForm from './SocialHistoryAddForm';
import SocialHistoryView from './SocialHistoryView';





class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div className="App-intro">
      < Card raised='true' color='red' className='CardView' >
            <label >Social History</label>
      <SocialHistoryAddForm/>
      </ Card>
        </div>
      </div>
    );
  }
}

export default App;
